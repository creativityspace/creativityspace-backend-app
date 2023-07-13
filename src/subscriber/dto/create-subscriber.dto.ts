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

export class CreateSubscriberDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  userId: never;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  collectionId?: never;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  payementMethod: string;
}

export class BodySubscriberDadaDto {
  @IsNotEmpty()
  @ApiProperty({ type: CreateSubscriberDto })
  subscriber: CreateSubscriberDto;

  @IsNotEmpty()
  @ApiProperty({ type: Price })
  price: Price;
}
