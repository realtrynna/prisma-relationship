import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseUtil } from '../../libs/response';

@Controller('user')
@ApiTags('사용자')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signup')
    async createUser(@Body() createUserDto: CreateUserDto) {
        try {
            const createUser = await this.userService.createUser(createUserDto);

            return ResponseUtil.succeededWrap(
                {
                    message: '회원 가입 성공',
                    statusCode: 201,
                },
                {},
            );
        } catch (err) {
            return ResponseUtil.failedWrap({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err as string,
            });
        }
    }
}
