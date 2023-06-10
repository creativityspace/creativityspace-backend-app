import { ApiProperty } from "@nestjs/swagger";
import { Subscriber } from "../entities/subscriber.entity";

export class CreateSubscriberDto {
    @ApiProperty({ type:String })
    userId: never;
  
    @ApiProperty({ type:String })
    collectionId?: never;
}
