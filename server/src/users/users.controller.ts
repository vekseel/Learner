import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { user, UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { FindUserDto } from './dto/find-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('getOne')
  findOne(@Body() dto: FindUserDto): Promise<user | undefined> {
    return this.usersService.findOne(dto);
  }

  @Post('register')
  registerUser(@Body() dto: RegisterUserDto) {
    return this.usersService.registerUser(dto);
  }

  async deleteUser() {
    return await this.usersService.deleteUser();
  }

  @Get('getAll')
  getAllUser() {
    return this.usersService.getAllUser();
  }
}
