import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.iftzn.mongodb.net/learner-database?retryWrites=true&w=majority',
    ),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
