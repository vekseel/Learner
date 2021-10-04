import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { user, UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { FindUserDto } from './dto/find-user.dto';

@Controller('/users')
export class UsersController {}
