export declare class Price {
    amount: number;
    curencyId: never;
}
export declare class CreatePrice {
    create: Price;
}
export declare class CreateProductDto {
    name: string;
    description: string;
    downloadProductUrl: string;
    photos: string[];
    profileId: never;
    productCategoryId: never;
}
export declare class BodyProductDadaDto {
    product: CreateProductDto;
    price: Price;
}
