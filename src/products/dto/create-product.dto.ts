import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

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
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false })
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  downloadProductUrl: string;
  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  photos: string[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  profileId: never;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  productCategoryId: never;
}

export class BodyProductDadaDto {
  @IsNotEmpty()
  @ApiProperty({ type: CreateProductDto })
  product: CreateProductDto;

  @IsNotEmpty()
  @ApiProperty({ type: Price })
  price: Price;
}
