import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRatingDto } from './create-rating.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateRatingDto extends PartialType(CreateRatingDto) {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: false })
  rating: number;
}
