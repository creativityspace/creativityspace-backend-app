import { CreateProductDto } from './create-product.dto';
export declare class Price {
    amount: number;
    curencyId: never;
}
export declare class CreatePrice {
    create: Price;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    name: string;
    description: string;
    downloadProductUrl: string;
    photos: string[];
}
export declare class UpdateBodyProductDadaDto {
    product: UpdateProductDto;
    price: Price;
}
export {};
