import { Injectable, NestMiddleware } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { Request, Response } from 'express';
import firebaseConfig from './firebase-config';

@Injectable()
export class PreAuthMiddleware implements NestMiddleware {
    private firebaseApp:any;

    constructor() {
        this.firebaseApp = firebase.initializeApp({
            credential: firebase.credential.cert({...firebaseConfig}),
            databaseURL: firebaseConfig.databaseUrl
        });
    }

  use(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization;
    if (token != null && token != '') {
      this.firebaseApp.auth()
        .verifyIdToken(token.replace('Bearer ', ''))
        .then(async (decodedToken) => {
          req['user'] = {
            email: decodedToken.email,
            user_id: decodedToken.user_id,
            roles: (decodedToken.roles || []),
            type: decodedToken.type,
          };
          next();
        })
        .catch(() => {
          PreAuthMiddleware.accessDenied(req.url, res);
        });
    } else {
      PreAuthMiddleware.accessDenied(req.url, res);
    }
  }

  private static accessDenied(url: string, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: url,
      message: 'access denied',
    });
  }
}