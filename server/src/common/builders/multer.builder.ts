import { Request } from 'express';

import {
    getMulterOption,
    TAllowImageMimeTypes,
} from '../../config/multer.config';

export const ALLOW_IMAGE_TYPES: TAllowImageMimeTypes = [
    'image/jpg',
    'image/jpeg',
    'image/png',
];
export class MulterBuilder {
    readonly #allowTypes: Array<string> = [];

    #resource = '';
    #path = '';
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    pushAllowTypes() {
        this.#allowTypes.push(...ALLOW_IMAGE_TYPES);
        return this;
    }

    setResource(data: string) {
        this.#resource = data;
        return this;
    }

    setPath(path: string) {
        this.#path = path;
        return this;
    }

    build(isProd: boolean) {}
}
