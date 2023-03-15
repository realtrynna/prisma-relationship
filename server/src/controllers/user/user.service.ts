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
            // throw new BadRequestException();
        } catch (err) {
            // throw new InternalServerErrorException(err);
        }
    }
}
