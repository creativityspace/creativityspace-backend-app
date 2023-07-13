import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRatingDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: false })
  rating: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  productId: never;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  userId: never;
}
