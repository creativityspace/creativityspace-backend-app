import { ApiProperty } from "@nestjs/swagger";

export class CreateFollowerDto {
    @ApiProperty( {type: String})
    userId: never;
    
    @ApiProperty( {type: String})
    profileId: never;
}
