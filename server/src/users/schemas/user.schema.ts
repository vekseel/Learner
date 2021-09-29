import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UsersSkill } from './usersSkill';
import { UserRole } from './userRole';
import { LanguageCode } from '../../languages';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  surname: string;

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
