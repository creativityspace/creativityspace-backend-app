import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductCategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductCategoryDto: CreateProductCategoryDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    update(id: string, updateProductCategoryDto: UpdateProductCategoryDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
}
