import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentForPostDto {
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

export class CreateCommentForProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  userId: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  productId?: string;
}
