import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    findSugestionUsers(id: string): Promise<({
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
    findOneByuserID(id: string): Promise<{
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
    findOneByuserName(id: string): Promise<{
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
