import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").User & {
        profile: import(".prisma/client").Profile;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findOneByUserName(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profile: import(".prisma/client").Profile;
        _count: {
            Subscribers: number;
        };
    }, never>;
    checkUserName(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        userName: string;
    }, never>;
    findOneByUserID(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profile: import(".prisma/client").Profile;
        _count: {
            Subscribers: number;
        };
    }, never>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
