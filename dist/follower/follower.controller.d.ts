import { FollowerService } from './follower.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
export declare class FollowerController {
    private readonly followerService;
    constructor(followerService: FollowerService);
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
    findAllByUser(): Promise<(import("@prisma/client/runtime/library").GetResult<{
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
