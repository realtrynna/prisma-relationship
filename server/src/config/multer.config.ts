import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';

export type TMulterOption = Pick<
    MulterOptions,
    'limits' | 'fileFilter' | 'storage'
>;
export type TFileSize = number;
export type TFileLimit = '2MB' | '5MB';
export type TImageType = 'image/jpg' | 'image/jpeg' | 'image/png';
export type TAllowImageMimeTypes = Array<TImageType>;

export const FILE_LIMIT_SIZE: Record<TFileLimit, TFileSize> = {
    '2MB': 1024 * 1024 * 2,
    '5MB': 1024 * 1024 * 5,
};

export const ALLOW_IMAGE_MIME_TYPES: TAllowImageMimeTypes = [
    'image/jpg',
    'image/jpeg',
    'image/png',
];

export function getMulterOption(isProd: boolean) {
    return {
        storage: diskStorage({
            destination: (
                req: any,
                file: Express.Multer.File,
                done: (error: Error | null, destination: string) => void,
            ) => {
                const path = './src/path';
                if (!existsSync(path)) {
                    mkdirSync(path);
                }
                done(null, path);
            },
            filename: (
                req: any,
                file: Express.Multer.File,
                done: (error: Error | null, filename: string) => void,
            ) => {
                done(null, 'image.jpg');
            },
        }),
        limits: {
            fileSize: isProd ? FILE_LIMIT_SIZE['5MB'] : FILE_LIMIT_SIZE['2MB'],
        },
        fileFilter: (
            req: any,
            file: Express.Multer.File,
            done: (err: Error | null, acceptFile: boolean) => void,
        ) => {
            console.log('Mime Type', file.mimetype);
            if (ALLOW_IMAGE_MIME_TYPES.includes(file.mimetype as TImageType)) {
                done(null, true);
            } else {
                done(new Error('File type is not allow'), false);
            }
        },
    };
}
