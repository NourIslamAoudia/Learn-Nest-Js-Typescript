// src/users/decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

// you can add many roles as you want, for example: @Roles('admin', 'user', 'manager')
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
