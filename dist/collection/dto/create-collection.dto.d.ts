export declare class Price {
    amount: number;
    curencyId: never;
}
export declare class CreateCollectionDto {
    title: string;
    isFree: boolean;
    description: string;
    bennerUrl: string;
    profileId: never;
}
export declare class BodyCollectionBada {
    colection: CreateCollectionDto;
    price: Price;
}
