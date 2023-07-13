import { ProductCategoriesService } from './product-categories.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
export declare class ProductCategoriesController {
    private readonly productCategoriesService;
    constructor(productCategoriesService: ProductCategoriesService);
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
