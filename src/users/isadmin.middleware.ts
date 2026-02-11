import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IsadminMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { role } = req.body;
    console.log('Role:', role);

    if (role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    next();
  }
}
