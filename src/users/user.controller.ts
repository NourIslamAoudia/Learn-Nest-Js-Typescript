import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers(): string {
    // return juste string for testing purpose
    return this.userService.getAllUsers();
  }

  @Post('addUser')
  createUser(@Body() user: string): string {
    this.userService.create(user);
    return 'User created successfully';
  }

  @Get('getUsers')
  getUsers(): string[] {
    return this.userService.getUsers();
  }

  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.userService.getUser(id);
  }

  //   @Post()
  //   async getUserById(@Query('id') id: string): Promise<string> {
  //     return this.userService.getUser(id);
  //   }
}

@Controller('admin')
export class AdminController {
  @Get()
  findAll(): string {
    return 'This action returns all admins';
  }
}
