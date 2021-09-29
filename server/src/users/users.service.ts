import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserRole } from './enums/userRole';

// ToDo: Add user entity
export type user = User;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<user | undefined> {
    // ToDo: add user entity instead of any
    return null;
    //return this.users.find((user) => user.username === username);
  }

  async registerUser(dto: RegisterUserDto): Promise<User> {
    return await this.userModel.create({
      ...dto,
      interfaceLanguageCode: 'ru',
      role: UserRole.Default,
    });
  }
  async unregisterUser() {
    return null;
  }
  async getAllUser() {
    const users = await this.userModel.find();
    return users;
  }
}
