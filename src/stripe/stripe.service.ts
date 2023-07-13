import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Stripe } from 'stripe';
import * as util from 'util';
import {  ProductLineDto } from './dto/productLine.dto';

@Injectable()
export class StripeService {
  readonly stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPEAPIKEY, {
      apiVersion: '2022-11-15',
      typescript: true,
    });
  }

  async createPaymentIntent(
    products: Array<ProductLineDto>,
  ): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    const YOUR_DOMAIN = 'http://localhost:4242';
    try {
      const ckeckoutparams: Stripe.Checkout.SessionCreateParams = {
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,

        line_items: products,
        mode: 'payment',
        
      };

      return await this.stripe.checkout.sessions.create(ckeckoutparams);
    } catch (error) {

      Logger.error(
        '[stripeService] Error creating a payment intent',
        util.inspect(error),
      );
      throw new UnprocessableEntityException(
        'The payment intent could not be created',
      );
    }
  }
}
