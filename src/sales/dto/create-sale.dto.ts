import { ApiProperty } from "@nestjs/swagger";

export class CreateSaleDto {
    @ApiProperty({ required: false })
    price: string;
  
    @ApiProperty({type: String})
    productId: never;
    @ApiProperty({type: String})
    userId: never;
}
