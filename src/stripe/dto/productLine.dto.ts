import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDataDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  description: string;
  @IsNotEmpty()
  @ApiProperty({type:Array<string>})
  images: Array<string>;
}
export class PriceDataDto {
  @IsNotEmpty()
  @ApiProperty()
  currency: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  unit_amount: number;

  @IsNotEmpty()
  @ApiProperty({ type: ProductDataDto })
  product_data: ProductDataDto;
}

export class ProductLineDto {
  @IsNotEmpty()
  @ApiProperty({ type: PriceDataDto })
  price_data: PriceDataDto;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  quantity: number;
}

