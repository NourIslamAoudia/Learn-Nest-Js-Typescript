import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers(): string {
    return 'This action returns all users';
  }

  @Post('addUser')
  createUser(): string {
    this.userService.create('New User');
    return 'User created successfully';
  }

  @Get('getUsers')
  getUsers(): string[] {
    return this.userService.addUser();
  }
}

@Controller('admin')
export class AdminController {
  @Get()
  findAll(): string {
    return 'This action returns all admins';
  }
}
