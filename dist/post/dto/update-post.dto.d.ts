import { CreatePostDto } from './create-post.dto';
import { PostType } from '@prisma/client';
declare const UpdatePostDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePostDto>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
    content?: string;
    title?: string;
    resourcesUrl?: Array<string>;
    keywords?: Array<string>;
    collectionId?: never;
    postType?: PostType;
}
export {};
