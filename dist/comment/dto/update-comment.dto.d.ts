import { CreateCommentForPostDto, CreateCommentForProductDto } from './create-comment.dto';
declare const UpdateCommentForPostDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommentForPostDto>>;
export declare class UpdateCommentForPostDto extends UpdateCommentForPostDto_base {
    content: string;
    postId?: string;
    userId: string;
}
declare const UpdateCommentForProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommentForProductDto>>;
export declare class UpdateCommentForProductDto extends UpdateCommentForProductDto_base {
    content: string;
    postId?: string;
    userId: string;
}
export {};
