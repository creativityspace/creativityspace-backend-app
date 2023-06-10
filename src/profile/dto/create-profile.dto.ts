import { ApiProperty } from "@nestjs/swagger";
import { CategoriesProfileDto } from "./categories-profile.dto";

export class CreateProfileDto {
    @ApiProperty()
    avatarUrl: string;
  
    @ApiProperty({ required: true, })
    bio: string;
    @ApiProperty({type: String})
    userId: never;
    
    // @ApiProperty({type: String})
    // categories: Array< CategoriesProfileDto>;

}
