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
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SignupUserDto } from './dto/signupUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body(ValidationPipe) signupUserDto: SignupUserDto): string {
    // Call the user service to handle the signup logic
    this.userService.signup(signupUserDto);
    return 'User signed up successfully';
  }

  @Get()
  getAllUsers(): string {
    // return juste string for testing purpose
    return this.userService.getAllUsers();
  }

  @Post('addUser')
  // custom validation pipe to validate the user input
  createUser(@Body(ValidationPipe) user: string): string {
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
