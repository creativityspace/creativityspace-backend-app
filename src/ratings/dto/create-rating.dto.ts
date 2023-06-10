import { ApiProperty } from "@nestjs/swagger";

export class CreateRatingDto {
    @ApiProperty({ required: false })
    rating: number;
  
    @ApiProperty({type: String})
    productId: never;
}
