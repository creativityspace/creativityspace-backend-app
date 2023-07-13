import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Price {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  amount: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  curencyId: never;
}

export class CreateSaleDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  productId: never;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  userId: never;
}

export class BodySalesDadaDto {
  @IsNotEmpty()
  @ApiProperty({ type: CreateSaleDto })
  sale: CreateSaleDto;

  @IsNotEmpty()
  @ApiProperty({ type: Price })
  price: Price;
}
