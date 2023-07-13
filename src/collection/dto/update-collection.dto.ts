import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectionDto } from './create-collection.dto';
import { ApiProperty } from '@nestjs/swagger';
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
export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {
  @IsNotEmpty()
  @ApiProperty()
  title: string;
  @IsNotEmpty()
  @ApiProperty({ required: false })
  description?: string;
  @IsNotEmpty()
  @ApiProperty({ required: false })
  bennerUrl?: string;

  @ApiProperty()
  isFree: boolean;

  @ApiProperty({ type: String })
  profileId: never;
}

export class UpdateBodyCollectionBada {
  @IsNotEmpty()
  @ApiProperty({ type: CreateCollectionDto })
  colection: CreateCollectionDto;

  @IsNotEmpty()
  @ApiProperty({ type: Price })
  price: Price;
}
