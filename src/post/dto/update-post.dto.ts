import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { PostType } from '@prisma/client';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    @ApiProperty({ required: false })
    content?: string;
    @ApiProperty({ required: false })
    title?: string;

    @ApiProperty({ required: false })
    resourcesUrl?: Array<string>;

    @ApiProperty({ required: false })
    keywords?: Array<string>;

    @ApiProperty({type: String })
    collectionId?: never;

    @ApiProperty()
    postType?: PostType;
}
