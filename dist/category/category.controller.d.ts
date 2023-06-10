import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    createMany(createCategoryDto: Array<CreateCategoryDto>): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Category[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
}
