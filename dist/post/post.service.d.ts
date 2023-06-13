import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Post & {
        collection: {
            Profile: {
                user: import(".prisma/client").User;
            };
        };
    })[]>;
    findAllByCollectionId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Post[]>;
    findAllByProfileId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Post[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    update(id: string, updatePostDto: UpdatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
}
