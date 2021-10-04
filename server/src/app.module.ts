import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { ConfigModule } from 'nestjs-config';
import { User } from './users';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [User],
      autoLoadModels: true,
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
