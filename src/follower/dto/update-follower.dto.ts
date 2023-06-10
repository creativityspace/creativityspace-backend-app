import { PartialType } from '@nestjs/mapped-types';
import { CreateFollowerDto } from './create-follower.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFollowerDto extends PartialType(CreateFollowerDto) {
    @ApiProperty( {type: String})
    userId: never;
    
    @ApiProperty( {type: String})
    profileId: never;
}

