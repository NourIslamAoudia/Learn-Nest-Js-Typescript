//
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {
    // le Reflector est un outil de NestJS qui nous permet de lire les métadonnées attachées à nos routes
    // dans notre cas, il nous permettra de lire les rôles requis pour accéder à une route
  } // ← Reflector injecté

  canActivate(context: ExecutionContext): boolean {
    // lit le post-it
    const requiredRoles = this.reflector.get<string[]>(
      'roles', // ← nom du post-it
      context.getHandler(), // ← sur quelle route ?
    );

    console.log(requiredRoles); // ['admin']
    console.log(context.getHandler().name); // getAllUsers

    // // ici, on suppose que l'utilisateur est déjà authentifié et que son rôle est attaché à la requête
    // const user = context.switchToHttp().getRequest().user;

    // // si aucun rôle requis n'est défini, on autorise l'accès
    // return requiredRoles.includes(user.role); //
    return true; // pour les tests, on autorise tout le monde
  }
}
