import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { user, UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('/Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  async findOne(username: string): Promise<user | undefined> {
    return await this.usersService.findOne(username);
  }

  @Post()
  registerUser(@Body() dto: RegisterUserDto) {
    return this.usersService.registerUser(dto);
  }

  async unregisterUser() {
    return await this.usersService.unregisterUser();
  }

  @Get()
  async getAllUser() {
    return await this.usersService.getAllUser();
  }
}
