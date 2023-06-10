import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FollowerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFollowerDto: CreateFollowerDto): import(".prisma/client").Prisma.Prisma__FollowerClient<import(".prisma/client").Follower, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Follower[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FollowerClient<import(".prisma/client").Follower, never>;
    update(id: string, updateFollowerDto: UpdateFollowerDto): import(".prisma/client").Prisma.Prisma__FollowerClient<import(".prisma/client").Follower, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FollowerClient<import(".prisma/client").Follower, never>;
}
