import { PartialType } from '@nestjs/mapped-types';
import {
  CreateCommentForPostDto,
  CreateCommentForProductDto,
} from './create-comment.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentForPostDto extends PartialType(
  CreateCommentForPostDto,
) {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  postId?: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  userId: string;
}

export class UpdateCommentForProductDto extends PartialType(
  CreateCommentForProductDto,
) {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  postId?: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  userId: string;
}
