"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PreAuthMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreAuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const firebase = require("firebase-admin");
const firebase_config_1 = require("./firebase-config");
let PreAuthMiddleware = exports.PreAuthMiddleware = PreAuthMiddleware_1 = class PreAuthMiddleware {
    constructor() {
        this.firebaseApp = firebase.initializeApp({
            credential: firebase.credential.cert(Object.assign({}, firebase_config_1.default)),
            databaseURL: firebase_config_1.default.databaseUrl
        });
    }
    use(req, res, next) {
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
                PreAuthMiddleware_1.accessDenied(req.url, res);
            });
        }
        else {
            PreAuthMiddleware_1.accessDenied(req.url, res);
        }
    }
    static accessDenied(url, res) {
        res.status(403).json({
            statusCode: 403,
            timestamp: new Date().toISOString(),
            path: url,
            message: 'access denied',
        });
    }
};
exports.PreAuthMiddleware = PreAuthMiddleware = PreAuthMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PreAuthMiddleware);
//# sourceMappingURL=pre-auth-middleware.js.map