import { CreateSubscriberDto, Price } from './create-subscriber.dto';
declare const UpdateSubscriberDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSubscriberDto>>;
export declare class UpdateSubscriberDto extends UpdateSubscriberDto_base {
    userId: never;
    collectionId?: never;
}
export declare class UpdateBodySubscriberDadaDto {
    subscriber: UpdateSubscriberDto;
    price: Price;
}
export {};
