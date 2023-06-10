import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CategoriesProfileDto } from './dto/categories-profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileDto: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Profile[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    update(id: string, updateProfileDto: UpdateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    updateCategiries(id: string, updateProfileDto: CategoriesProfileDto[]): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile & {
        categories: import(".prisma/client").Category[];
    }, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
}
