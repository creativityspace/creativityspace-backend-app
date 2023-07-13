import { Body, Controller, Post, Response, Req, Res } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { ProductLineDto } from './dto/productLine.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Public()
  @Post()
  async create(
    @Body() stripeLineData: Array<ProductLineDto>,
    
  ) {
  const {id} =( await this.stripeService.createPaymentIntent(stripeLineData))
  return { id}
   
  }
 
}
