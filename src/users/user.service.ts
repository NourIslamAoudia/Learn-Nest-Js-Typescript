import { Injectable, HttpException } from '@nestjs/common';
import { SignupUserDto } from './dto/signupUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';

@Injectable()
export class UserService {
  private readonly users: string[] = [];

  create(user: string) {
    this.users.push(user);
  }

  getUsers(): string[] {
    return this.users;
  }

  getAllUsers(): string {
    return 'This action returns all users';
  }

  async getUser(id: number): Promise<string> {
    //searching for a user by id logic here in the database
    const userExists = true; // This is just a placeholder. Replace with actual logic.

    if (!userExists) {
      throw new HttpException('User not found', 404);
    }
    return 'This action returns a user by id';
  }

  async getUserByName(name: boolean): Promise<string> {
    if (!name) {
      throw new HttpException('User not found', 404);
    }
    return 'This action returns a user by name';
  }

  async signup(signupUserDto: SignupUserDto): Promise<void> {
    // Here you would typically handle the signup logic, such as saving the user to a database
    console.log('User signed up with data:', signupUserDto);
  }

  async login(loginUserDto: LoginUserDto): Promise<void> {
    // Here you would typically handle the login logic, such as validating the user credentials
    console.log('User logged in with data:', loginUserDto);
  }
}
