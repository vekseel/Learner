import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserRole } from './enums/userRole';
import { FindUserDto } from './dto/find-user.dto';

// ToDo: Add user entity
export type user = User;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(dto: FindUserDto): Promise<user | undefined> {
    const user = await this.userModel.findOne({ username: dto.username });
    return user;
  }

  async registerUser(dto: RegisterUserDto): Promise<User> {
    return await this.userModel.create({
      ...dto,
      interfaceLanguageCode: 'ru',
      role: UserRole.Default,
    });
  }

  async deleteUser() {
    return null;
  }

  async getAllUser(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
}
