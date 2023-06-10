import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @ApiProperty()
    avatarUrl: string;

    @ApiProperty({ required: true, })
    bio: string;
 
}
