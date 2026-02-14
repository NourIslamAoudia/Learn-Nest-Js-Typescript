import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  NestModule,
} from '@nestjs/common';
import { UserController, AdminController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleware } from './logger.middleware';
import { IsadminMiddleware } from './isadmin.middleware';
import { RolesGuard } from './guards/roles.guard';

@Module({
  controllers: [UserController, AdminController],
  providers: [UserService,RolesGuard],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IsadminMiddleware, LoggerMiddleware).forRoutes('admin');
  }
}
