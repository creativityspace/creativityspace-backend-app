import { ApiProperty } from '@nestjs/swagger';
import { CategoriesProfileDto } from './categories-profile.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  avatarUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  bio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  userId: never;

  // @ApiProperty({type: String})
  // categories: Array< CategoriesProfileDto>;
}
