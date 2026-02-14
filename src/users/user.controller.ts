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
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SignupUserDto } from './dto/signupUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body(ValidationPipe) signupUserDto: SignupUserDto): string {
    // Call the user service to handle the signup logic
    this.userService.signup(signupUserDto);
    return 'User signed up successfully';
  }

  @Post('login')
  login(@Body(ValidationPipe) loginUserDto: LoginUserDto): string {
    // Here you would typically handle the login logic, such as validating the user credentials
    this.userService.login(loginUserDto);
    return 'User logged in successfully';
  }

  @Roles('admin')
  @UseGuards(RolesGuard)
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
