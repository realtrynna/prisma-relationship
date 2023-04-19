import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { UserValidator } from './user.validator';
import { ICreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userValidator: UserValidator,
        private readonly prisma: PrismaService
    ) {}

    async createUser(createUserDto: ICreateUserDto) {
        const result = this.userValidator.createUserValidator(createUserDto);
        const { userId, ...user } = await this.prisma.user.create({ data: result, include: { UserMeta: true }});


        console.log("생성 결과", user);
    }
}