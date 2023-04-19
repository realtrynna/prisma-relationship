import { Injectable } from '@nestjs/common';
import { Prisma } from "@prisma/client";

import { ICreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserValidator {
    createUserValidator(createUserDto: ICreateUserDto) {
        return Prisma.validator<Prisma.UserCreateInput>()({
            email: createUserDto.email,
            name: createUserDto.name,
            UserMeta: {
                create: {
                    age: createUserDto.age,
                    gender: createUserDto.gender,
                    introduce: createUserDto.introduce,
                }
            }
        });
    }
}