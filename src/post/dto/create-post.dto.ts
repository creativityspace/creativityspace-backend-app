import { ApiProperty } from "@nestjs/swagger";
import { PostType } from "@prisma/client";

export class CreatePostDto {
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
