import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CategoriesProfileDto } from './dto/categories-profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileDto: CreateProfileDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        avatarUrl: string;
        bio: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        avatarUrl: string;
        bio: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        avatarUrl: string;
        bio: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        avatarUrl: string;
        bio: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    updateCategiries(id: string, updateProfileDto: CategoriesProfileDto[]): Promise<{
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
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        avatarUrl: string;
        bio: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
