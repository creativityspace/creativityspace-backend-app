import { CreateCommentForPostDto, CreateCommentForProductDto } from './dto/create-comment.dto';
import { UpdateCommentForPostDto, UpdateCommentForProductDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CommentService {
    private prisma;
    constructor(prisma: PrismaService);
    createForPost(createCommentDto: CreateCommentForPostDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    createForProduct(createCommentDto: CreateCommentForProductDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findAllByPostId(id: string): Promise<({
        user: {
            profile: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                avatarUrl: string;
                bio: string;
                userId: string;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            email: string;
            userID: string;
            name: string;
            userName: string;
            role: import(".prisma/client").Role;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findAllByProductId(id: string): Promise<({
        user: {
            profile: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                avatarUrl: string;
                bio: string;
                userId: string;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            email: string;
            userID: string;
            name: string;
            userName: string;
            role: import(".prisma/client").Role;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    updateForPost(id: string, updateCommentDto: UpdateCommentForPostDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    updateForProduct(id: string, updateCommentDto: UpdateCommentForProductDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        postId: string;
        userId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
