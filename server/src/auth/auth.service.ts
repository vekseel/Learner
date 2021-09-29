import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { GetUserDto } from '../users/dto/get-user-.dto';
import { User } from '../users';
import { FindUserDto } from '../users/dto/find-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  // ToDo: add user entity instead of any
  async validateUser(dto: GetUserDto): Promise<User | undefined> {
    const user = await this.userService.findOne(new FindUserDto(dto.username));
    if (user && user.password === dto.password) {
      const { password, ...result } = user;
      return undefined;
    }
    return null;
  }
}
