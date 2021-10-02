import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserRole } from './enums/userRole';
import { FindUserDto } from './dto/find-user.dto';
import bcrypt = require('bcrypt');
import jwt = require('jsonwebtoken');
import * as dotenv from 'dotenv';
export type user = User;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOneUser(dto: FindUserDto): Promise<user | undefined> {
    const user = await this.userModel.findOne({ username: dto.username });
    return user;
  }

  async registerUser(dto: RegisterUserDto): Promise<string> {
    const hashPassword = await bcrypt.hash(dto.password, 5);

    const user = await this.userModel.create({
      username: dto.username,
      password: hashPassword,
      emailAddress: dto.emailAddress,
      skill: dto.skill,
      interfaceLanguageCode: 'ru',
      role: UserRole.Default,
    });

    const jwtoken = jwt.sign(
      { id: user.id, email: user.emailAddress },
      process.env.SECRET_KEY,
      { expiresIn: '24h' },
    );

    return jwtoken;
  }

  async deleteUser() {
    return null;
  }

  async getAllUser(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
}
