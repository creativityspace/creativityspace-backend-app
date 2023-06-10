import { ApiProperty } from "@nestjs/swagger";

export class CategoriesProfileDto {
    @ApiProperty()
    id: string;
  
    // @ApiProperty({ required: true, })
    // name: string;
    // @ApiProperty({ required: true, })
    // createdAt: string;
    
    // @ApiProperty({ required: true, })
    // updatedAt: string;

  
}