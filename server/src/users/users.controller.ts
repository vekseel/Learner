import { Controller, Get, Injectable } from '@nestjs/common';
import { user, UsersService } from './users.service';

@Controller('/Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  async findOne(username: string): Promise<user | undefined> {
    return await this.usersService.findOne(username);
  }

  async registerUser() {
    return await this.usersService.registerUser();
  }

  async unregisterUser() {
    return await this.usersService.unregisterUser();
  }

  @Get()
  async getAllUser() {
    return await this.usersService.getAllUser();
  }
}
