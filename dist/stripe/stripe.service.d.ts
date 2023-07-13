import { Stripe } from 'stripe';
import { ProductLineDto } from './dto/productLine.dto';
export declare class StripeService {
    readonly stripe: Stripe;
    constructor();
    createPaymentIntent(products: Array<ProductLineDto>): Promise<Stripe.Response<Stripe.Checkout.Session>>;
}
