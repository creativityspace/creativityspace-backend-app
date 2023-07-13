export declare class Price {
    amount: number;
    curencyId: never;
}
export declare class CreateSubscriberDto {
    userId: never;
    collectionId?: never;
    payementMethod: string;
}
export declare class BodySubscriberDadaDto {
    subscriber: CreateSubscriberDto;
    price: Price;
}
