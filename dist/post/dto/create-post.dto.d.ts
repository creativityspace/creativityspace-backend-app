import { PostType } from '@prisma/client';
export declare class CreatePostDto {
    content?: string;
    title?: string;
    resourcesUrl?: Array<string>;
    keywords?: Array<string>;
    collectionId?: never;
    postType?: PostType;
}
