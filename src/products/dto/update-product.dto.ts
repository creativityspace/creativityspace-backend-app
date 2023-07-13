import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty } from 'class-validator';

export class Price {
  @IsNotEmpty()
  @ApiProperty()
  amount: number;
  @IsNotEmpty()
  @ApiProperty({ type: String })
  curencyId: never;
}

export class CreatePrice {
  @ApiProperty({ type: Price })
  create: Price;
}
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @ApiProperty({ required: false })
  description: string;

  @IsNotEmpty()
  @ApiProperty()
  downloadProductUrl: string;
  @IsNotEmpty()
  @ApiProperty()
  photos: string[];
}

export class UpdateBodyProductDadaDto {
  @IsNotEmpty()
  @ApiProperty({ type: UpdateProductDto })
  product: UpdateProductDto;

  @IsNotEmpty()
  @ApiProperty({ type: Price })
  price: Price;
}
