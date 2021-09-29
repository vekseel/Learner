import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { async } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  // ToDo: add user entity instead of any
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
