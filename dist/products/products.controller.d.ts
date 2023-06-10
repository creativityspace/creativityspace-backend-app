import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductsClient<import(".prisma/client").Products, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Products[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductsClient<import(".prisma/client").Products, never>;
    update(id: string, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductsClient<import(".prisma/client").Products, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProductsClient<import(".prisma/client").Products, never>;
}
