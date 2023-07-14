import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        email: string;
        userID: string;
        name: string;
        userName: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findAll(): Promise<({
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
    }, unknown> & {})[]>;
    findAllCreator(): Promise<({
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
    }, unknown> & {})[]>;
    findSugestionUsers(userid: string, params: {
        skip?: number;
        take?: number;
    }): Promise<({
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
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        email: string;
        userID: string;
        name: string;
        userName: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findOneByUserName(id: string): Promise<{
        profile: {
            _count: {
                followers: number;
                Products: number;
            };
            collections: ({
                _count: {
                    posts: number;
                };
            } & import("@prisma/client/runtime/library").GetResult<{
                id: string;
                title: string;
                description: string;
                bennerUrl: string;
                isFree: boolean;
                published: boolean;
                createdAt: Date;
                updatedAt: Date;
                profileId: string;
                priceId: string;
            }, unknown> & {})[];
            categories: (import("@prisma/client/runtime/library").GetResult<{
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {})[];
        } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {}>;
    checkUserName(id: string): Promise<{
        userName: string;
    }>;
    findOneByUserID(id: string): Promise<{
        profile: import("@prisma/client/runtime/library").GetResult<{
            id: string;
            avatarUrl: string;
            bio: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
        _count: {
            Subscribers: number;
        };
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        email: string;
        userID: string;
        name: string;
        userName: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        email: string;
        userID: string;
        name: string;
        userName: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        email: string;
        userID: string;
        name: string;
        userName: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
