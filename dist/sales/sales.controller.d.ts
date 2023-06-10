import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: CreateSaleDto): import(".prisma/client").Prisma.Prisma__SalesClient<import(".prisma/client").Sales, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Sales[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SalesClient<import(".prisma/client").Sales, never>;
    update(id: string, updateSaleDto: UpdateSaleDto): import(".prisma/client").Prisma.Prisma__SalesClient<import(".prisma/client").Sales, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SalesClient<import(".prisma/client").Sales, never>;
}
