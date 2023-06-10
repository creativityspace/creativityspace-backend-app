import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriberDto } from './create-subscriber.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubscriberDto extends PartialType(CreateSubscriberDto) {
    @ApiProperty({ type:String })
    userId: never;
  
    @ApiProperty({ type:String })
    collectionId?: never;
}
