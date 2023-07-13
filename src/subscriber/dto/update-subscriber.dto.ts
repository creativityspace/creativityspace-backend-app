import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriberDto, Price } from './create-subscriber.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateSubscriberDto extends PartialType(CreateSubscriberDto) {
  @ApiProperty({ type: String })
  userId: never;

  @ApiProperty({ type: String })
  collectionId?: never;
}

export class UpdateBodySubscriberDadaDto {
  @IsNotEmpty()
  @ApiProperty({ type: UpdateSubscriberDto })
  subscriber: UpdateSubscriberDto;

  @IsNotEmpty()
  @ApiProperty({ type: Price })
  price: Price;
}
