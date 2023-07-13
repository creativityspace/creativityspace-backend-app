import { CreateCollectionDto } from './create-collection.dto';
export declare class Price {
    amount: number;
    curencyId: never;
}
export declare class CreatePrice {
    create: Price;
}
declare const UpdateCollectionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCollectionDto>>;
export declare class UpdateCollectionDto extends UpdateCollectionDto_base {
    title: string;
    description?: string;
    bennerUrl?: string;
    isFree: boolean;
    profileId: never;
}
export declare class UpdateBodyCollectionBada {
    colection: CreateCollectionDto;
    price: Price;
}
export {};
