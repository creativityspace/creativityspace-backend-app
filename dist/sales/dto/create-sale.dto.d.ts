export declare class Price {
    amount: number;
    curencyId: never;
}
export declare class CreateSaleDto {
    productId: never;
    userId: never;
}
export declare class BodySalesDadaDto {
    sale: CreateSaleDto;
    price: Price;
}
