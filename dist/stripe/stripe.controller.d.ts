import { StripeService } from './stripe.service';
import { ProductLineDto } from './dto/productLine.dto';
export declare class StripeController {
    private readonly stripeService;
    constructor(stripeService: StripeService);
    create(stripeLineData: Array<ProductLineDto>): Promise<{
        id: string;
    }>;
}
