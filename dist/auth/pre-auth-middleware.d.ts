import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class PreAuthMiddleware implements NestMiddleware {
    private firebaseApp;
    constructor();
    use(req: Request, res: Response, next: () => void): void;
    private static accessDenied;
}
