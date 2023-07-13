import { CreateSaleDto } from './create-sale.dto';
export declare class Price {
    amount: number;
    curencyId: never;
}
declare const UpdateSaleDto_base: import("@nestjs/common").Type<Partial<CreateSaleDto>>;
export declare class UpdateSaleDto extends UpdateSaleDto_base {
    productId: never;
    userId: never;
}
export declare class UpdateBodySalesDadaDto {
    sale: UpdateSaleDto;
    price: Price;
}
export {};
