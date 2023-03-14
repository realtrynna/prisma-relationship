import {
    InternalServerErrorException,
    BadRequestException,
    Injectable,
} from '@nestjs/common';

import { CreateUserDto } from '../../entities/user/dto/create-user.dto';

@Injectable()
export class UserService {
    async createUser(createUserDto: CreateUserDto) {
        try {
            throw new BadRequestException('베드리퀘스트익셉션!!!');
        } catch (err) {
            console.log('서비스 캐치 실행     ');
            throw new InternalServerErrorException(err);
        }
    }
}
