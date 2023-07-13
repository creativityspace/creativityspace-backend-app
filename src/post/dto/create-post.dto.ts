import { ApiProperty } from '@nestjs/swagger';
import { PostType } from '@prisma/client';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false })
  content?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false })
  title?: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ required: false })
  resourcesUrl?: Array<string>;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ required: false })
  keywords?: Array<string>;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  collectionId?: never;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  postType?: PostType;
}
