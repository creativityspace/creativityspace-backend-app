import { ApiProperty } from "@nestjs/swagger";

export class CreateCollectionDto {
    @ApiProperty()
    title: string;


    @ApiProperty()
    isFree: boolean;
    
    @ApiProperty({ required: false })
    description?: string;
    
    @ApiProperty({ required: false })
    bennerUrl?: string;

    @ApiProperty()
    accessPrice: string;

    @ApiProperty({type: String})
    profileId: never;
}
