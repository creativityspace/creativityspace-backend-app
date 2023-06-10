import { ProductCategoriesService } from './product-categories.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
export declare class ProductCategoriesController {
    private readonly productCategoriesService;
    constructor(productCategoriesService: ProductCategoriesService);
    create(createProductCategoryDto: CreateProductCategoryDto): import(".prisma/client").Prisma.Prisma__ProductCategoriesClient<import(".prisma/client").ProductCategories, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").ProductCategories[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductCategoriesClient<import(".prisma/client").ProductCategories, never>;
    update(id: string, updateProductCategoryDto: UpdateProductCategoryDto): import(".prisma/client").Prisma.Prisma__ProductCategoriesClient<import(".prisma/client").ProductCategories, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProductCategoriesClient<import(".prisma/client").ProductCategories, never>;
}
