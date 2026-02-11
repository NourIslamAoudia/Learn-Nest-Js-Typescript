import { Injectable, HttpException } from '@nestjs/common';

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

  async getUser(id: string): Promise<string> {
    //searching for a user by id logic here in the database
    const userExists = false; // This is just a placeholder. Replace with actual logic.

    if (!userExists) {
      throw new HttpException('User not found', 404);
    }
    return 'This action returns a user by id';
  }
}
