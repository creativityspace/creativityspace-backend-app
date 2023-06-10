import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    name: string;
  
    @ApiProperty({ required: false })
    description: string;
  
    @ApiProperty()
    price: string;
    
    @ApiProperty()
    downloadProductUrl: string;
    @ApiProperty()
    photos: string[];

    @ApiProperty({type:String})
    profileId: never;

    @ApiProperty({type:String})
    productCategoryId: never;
}
