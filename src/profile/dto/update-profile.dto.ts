import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  avatarUrl: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  bio: string;
}
