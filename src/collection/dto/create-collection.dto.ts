import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, isString } from 'class-validator';

export class Price {
  @IsNotEmpty()
  @ApiProperty()
  amount: number;
  @IsNotEmpty()
  @ApiProperty({ type: String })
  curencyId: never;
}

export class CreateCollectionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  isFree: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  bennerUrl: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  profileId: never;
}

export class BodyCollectionBada {
  @IsNotEmpty()
  @ApiProperty({ type: CreateCollectionDto })
  colection: CreateCollectionDto;

  @IsNotEmpty()
  @ApiProperty({ type: Price })
  price: Price;
}
