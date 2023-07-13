import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSaleDto } from './create-sale.dto';
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

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  productId: never;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  userId: never;
}

export class UpdateBodySalesDadaDto {
  @IsNotEmpty()
  @ApiProperty({ type: UpdateSaleDto })
  sale: UpdateSaleDto;

  @IsNotEmpty()
  @ApiProperty({ type: Price })
  price: Price;
}
