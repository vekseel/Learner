import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { GetUserDto } from '../users/dto/get-user-.dto';
import { FindUserDto } from '../users/dto/find-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(dto: GetUserDto): Promise<any> {
    const user = await this.userService.findOneUser(
      new FindUserDto(dto.username),
    );
    if (user && user.password === dto.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
