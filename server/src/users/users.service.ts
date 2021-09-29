import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';

// ToDo: Add user entity
export type user = User;

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<user | undefined> {
    // ToDo: add user entity instead of any
    return null;
    //return this.users.find((user) => user.username === username);
  }

  async registerUser() {
    return null;
  }
  async unregisterUser() {
    return null;
  }
  async getAllUser() {
    return null;
  }
}
