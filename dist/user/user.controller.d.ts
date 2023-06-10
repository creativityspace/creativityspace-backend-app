import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").User & {
        profile: import(".prisma/client").Profile;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findOneByuserID(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profile: import(".prisma/client").Profile;
        _count: {
            Subscribers: number;
        };
    }, never>;
    findOneByuserName(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profile: import(".prisma/client").Profile;
        _count: {
            Subscribers: number;
        };
    }, never>;
    checkUserName(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        userName: string;
    }, never>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
