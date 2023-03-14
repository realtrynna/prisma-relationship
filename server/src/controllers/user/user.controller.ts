import { Controller, Body, HttpStatus, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from '../../entities/user/dto/create-user.dto';
import { ResponseUtil } from '../../libs/response';

@Controller('user')
@ApiTags('사용자')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signup')
    async createUser(@Body() createUserDto: CreateUserDto) {
        try {
            const createUser = await this.userService.createUser(createUserDto);

            console.log('Create User     ', createUser);
        } catch (err) {
            console.log('여기가 실행?!');
            console.log(err);
            return ResponseUtil.failedWrap({
                message: err as string,
                statusCode: HttpStatus.BAD_REQUEST,
            });
        }
    }
}
