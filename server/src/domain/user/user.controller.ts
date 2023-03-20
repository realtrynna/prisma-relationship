import { Express } from 'express';
import {
    Body,
    Controller,
    HttpStatus,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseUtil } from '../../libs/response';
import { getMulterOption } from '../../config/multer.config';

@Controller('user')
@UseInterceptors(FileInterceptor('file', getMulterOption(false)))
@ApiTags('사용자')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signup')
    async createUser(@UploadedFile() file: Express.Multer.File) {
        try {
            console.log('File', file);
            // const createUser = await this.userService.createUser(createUserDto);
            //
            // return ResponseUtil.succeededWrap(
            //     {
            //         message: '회원 가입 성공',
            //         statusCode: 201,
            //     },
            //     {},
            // );
        } catch (err) {
            return ResponseUtil.failedWrap({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err as string,
            });
        }
    }
}
