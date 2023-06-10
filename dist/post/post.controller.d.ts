import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Post[]>;
    findAllByCollectionId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Post[]>;
    findAllByProfileId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Post[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    update(id: string, updatePostDto: UpdatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
}
