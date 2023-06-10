import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    createMany(createCategoryDto: Array<CreateCategoryDto>): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Category[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
}
