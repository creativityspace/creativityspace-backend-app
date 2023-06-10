import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSaleDto } from './create-sale.dto';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
    @ApiProperty({ required: false })
    price: string;
  
    @ApiProperty({type: String})
    productId: never;
    @ApiProperty({type: String})
    userId: never;
}
