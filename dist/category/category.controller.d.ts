import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    createMany(createCategoryDto: Array<CreateCategoryDto>): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
