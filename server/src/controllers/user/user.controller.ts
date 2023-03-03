import { Controller, Body, Get, Post } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

import { UserService } from "./user.service";
import { CreateUserDto } from "../../repositories/user/dto/create-user.dto";

@Controller('/user')
@ApiTags("사용자 API")
export class UserController {
    constructor(private  readonly  userService: UserService) {}

    @Post("/signup")
    async createUser(@Body() createUserDto: CreateUserDto) {
        const data = await this.userService.createUser(createUserDto);
        console.log("트랜스폼 디티오", createUserDto);
    }
}
