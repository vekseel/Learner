import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UsersSkill } from './enums/usersSkill';
import { UserRole } from './enums/userRole';
import { LanguageCode } from '../languages';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { RegisterUserDto } from './dto/register-user.dto';

export type UserDocument = User & Document;

@Table({ tableName: 'users' })
export class User extends Model<User, RegisterUserDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  emailAddress: string;

  @Column({ type: DataType.STRING, allowNull: false })
  skill: UsersSkill;

  @Column({ type: DataType.STRING, allowNull: false })
  role: UserRole;

  @Column({ type: DataType.STRING, allowNull: false })
  interfaceLanguageCode: LanguageCode;
}

export const UserSchema = SchemaFactory.createForClass(User);
