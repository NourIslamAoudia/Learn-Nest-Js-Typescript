import { Module } from '@nestjs/common';
import { UserController, AdminController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController, AdminController],
  providers: [UserService],
})
export class UserModule {}
