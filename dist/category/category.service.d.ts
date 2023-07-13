import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
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
