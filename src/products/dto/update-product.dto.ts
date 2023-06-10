import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty()
    name: string;
  
    @ApiProperty({ required: false })
    description: string;
  
    @ApiProperty()
    price: string;
    
    @ApiProperty()
    downloadProductUrl: string;
    @ApiProperty()
    photos: string[];
}
