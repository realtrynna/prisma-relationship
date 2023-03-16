import {
    InternalServerErrorException,
    BadRequestException,
    Injectable,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

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
