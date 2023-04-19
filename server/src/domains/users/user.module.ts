import { Module } from "@nestjs/common";

import { UserController } from './user.controller';
import { UserService } from "./user.service";
import { UserValidator } from './user.validator';
import { PrismaService } from "../../prisma/prisma.service";

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        UserValidator,
        PrismaService,
    ],
})
export class UserModule {}