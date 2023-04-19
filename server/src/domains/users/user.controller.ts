import { Controller, Get, Post, ParseIntPipe } from "@nestjs/common";
import { TypedRoute, TypedBody } from "@nestia/core";

import { UserService } from './user.service';
import { ICreateUserDto } from './dtos/create-user.dto';

@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(
      private readonly userService: UserService
  ) {
  }

  @TypedRoute.Post("signup")
  async createUser(@TypedBody() createUserDto: ICreateUserDto) {
    console.log(createUserDto.age);
    await this.userService.createUser(createUserDto);
  }
}