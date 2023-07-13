import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from './decorators/public.decorator';
import firebaseConfig from './firebase-config';
import * as firebase from 'firebase-admin';

@Injectable()
export class AuthGuard implements CanActivate {
  private firebaseApp: any;
  constructor(private reflector: Reflector) {
    this.firebaseApp = firebase.initializeApp({
      credential: firebase.credential.cert({ ...firebaseConfig }),
      databaseURL: firebaseConfig.databaseUrl,
    });
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      // 💡 See this condition
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    // try {
    //   this.firebaseApp
    //     .auth()
    //     .verifyIdToken(token)
    //     .then(async (decodedToken) => {
    //       request['user'] = {
    //         email: decodedToken.email,
    //         user_id: decodedToken.user_id,
    //         roles: decodedToken.roles || [],
    //         type: decodedToken.type,
    //       };
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //       throw new UnauthorizedException();
    //     });
    // } catch {
    //   throw new UnauthorizedException();
    // }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
