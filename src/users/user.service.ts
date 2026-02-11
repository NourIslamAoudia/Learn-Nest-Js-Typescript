import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users: string[] = [];

  create(user: string) {
    this.users.push(user);
  }

  addUser(): string[] {
    return this.users;
  }
}
