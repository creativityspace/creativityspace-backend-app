export declare class ProductDataDto {
    name: string;
    description: string;
    images: Array<string>;
}
export declare class PriceDataDto {
    currency: string;
    unit_amount: number;
    product_data: ProductDataDto;
}
export declare class ProductLineDto {
    price_data: PriceDataDto;
    quantity: number;
}
