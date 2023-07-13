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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
const util = require("util");
let StripeService = exports.StripeService = class StripeService {
    constructor() {
        this.stripe = new stripe_1.Stripe(process.env.STRIPEAPIKEY, {
            apiVersion: '2022-11-15',
            typescript: true,
        });
    }
    async createPaymentIntent(products) {
        const YOUR_DOMAIN = 'http://localhost:4242';
        try {
            const ckeckoutparams = {
                success_url: `${YOUR_DOMAIN}/success.html`,
                cancel_url: `${YOUR_DOMAIN}/cancel.html`,
                line_items: products,
                mode: 'payment',
            };
            return await this.stripe.checkout.sessions.create(ckeckoutparams);
        }
        catch (error) {
            common_1.Logger.error('[stripeService] Error creating a payment intent', util.inspect(error));
            throw new common_1.UnprocessableEntityException('The payment intent could not be created');
        }
    }
};
exports.StripeService = StripeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StripeService);
//# sourceMappingURL=stripe.service.js.map