import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { RegisterUserDto } from './dto/register-user.dto';
export type user = User;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async registerUser(dto: RegisterUserDto) {
    const user = await this.userModel.create(dto);
  }
}
