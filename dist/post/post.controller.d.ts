import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        title: string;
        resourcesUrl: string[];
        published: boolean;
        collectionId: string;
        postType: import(".prisma/client").PostType;
        keywords: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findAll(userId: string, skip: string, take: string): Promise<({
        collection: {
            Profile: {
                user: import("@prisma/client/runtime/library").GetResult<{
                    id: string;
                    email: string;
                    userID: string;
                    name: string;
                    userName: string;
                    role: import(".prisma/client").Role;
                    createdAt: Date;
                    updatedAt: Date;
                }, unknown> & {};
                id: string;
                avatarUrl: string;
            };
        };
        comments: ({
            user: import("@prisma/client/runtime/library").GetResult<{
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
        }, unknown> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        title: string;
        resourcesUrl: string[];
        published: boolean;
        collectionId: string;
        postType: import(".prisma/client").PostType;
        keywords: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findAllByCollectionId(id: string, skip: string, take: string): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        title: string;
        resourcesUrl: string[];
        published: boolean;
        collectionId: string;
        postType: import(".prisma/client").PostType;
        keywords: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findAllByProfileId(id: string, skip: string, take: string): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        title: string;
        resourcesUrl: string[];
        published: boolean;
        collectionId: string;
        postType: import(".prisma/client").PostType;
        keywords: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        title: string;
        resourcesUrl: string[];
        published: boolean;
        collectionId: string;
        postType: import(".prisma/client").PostType;
        keywords: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        title: string;
        resourcesUrl: string[];
        published: boolean;
        collectionId: string;
        postType: import(".prisma/client").PostType;
        keywords: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        content: string;
        title: string;
        resourcesUrl: string[];
        published: boolean;
        collectionId: string;
        postType: import(".prisma/client").PostType;
        keywords: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
