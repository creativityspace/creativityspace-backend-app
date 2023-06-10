import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectionDto } from './create-collection.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {
    @ApiProperty()
    title: string;
    
    @ApiProperty({ required: false })
    description?: string;
    
    @ApiProperty({ required: false })
    bennerUrl?: string;

    @ApiProperty()
    accessPrice: string;
    @ApiProperty()
    isFree: boolean;

    @ApiProperty({type: String})
    profileId: never;
}
