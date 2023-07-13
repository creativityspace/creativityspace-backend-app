import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FollowerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFollowerDto: CreateFollowerDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
    }, unknown> & {}>;
    update(id: string, updateFollowerDto: UpdateFollowerDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
    }, unknown> & {}>;
}
