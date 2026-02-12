import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
  ParseBoolPipe,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ValidationPipe } from './pipes/log.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers(): string {
    // return juste string for testing purpose
    return this.userService.getAllUsers();
  }

  @Post('addUser')
  // custom validation pipe to validate the user input
  createUser(@Body(new ValidationPipe()) user: string): string {
    this.userService.create(user);
    return 'User created successfully';
  }

  @Get('getUsers')
  getUsers(): string[] {
    return this.userService.getUsers();
  }

  @Get('byname')
  async getUserByName(
    @Query(
      'name',
      new ParseBoolPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    name: boolean,
  ): Promise<string> {
    return this.userService.getUserByName(name);
  }
  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.userService.getUser(id);
  }
}

@Controller('admin')
export class AdminController {
  @Get()
  findAll(): string {
    return 'This action returns all admins';
  }
}
