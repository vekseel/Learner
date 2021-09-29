import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UsersSkill } from '../enums/usersSkill';
import { UserRole } from '../enums/userRole';
import { LanguageCode } from '../../languages';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  emailAddress: string;

  @Prop()
  skill: UsersSkill;

  @Prop()
  role: UserRole;

  @Prop()
  interfaceLanguageCode: LanguageCode;
}

export const UserSchema = SchemaFactory.createForClass(User);
