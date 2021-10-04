import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserDto } from '../users/dto/get-user-.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {}
