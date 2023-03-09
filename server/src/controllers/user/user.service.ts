import { Injectable } from '@nestjs/common';

import { CreateUserDto } from '../../entities/user/dto/create-user.dto';

@Injectable()
export class UserService {
    async createUser(createUserDto: CreateUserDto) {
        return '사용자 생성 성공';
    }
}
