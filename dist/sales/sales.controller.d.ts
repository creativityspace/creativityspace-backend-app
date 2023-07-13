import { SalesService } from './sales.service';
import { BodySalesDadaDto } from './dto/create-sale.dto';
import { UpdateBodySalesDadaDto } from './dto/update-sale.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: BodySalesDadaDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        priceId: string;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        priceId: string;
    }, unknown> & {})[]>;
    findAllByUserId(userId: string, skip: string, take: string): Promise<({
        price: {
            curency: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                code: string;
                label: string;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            amount: import("@prisma/client/runtime/library").Decimal;
            curencyId: string;
        }, unknown> & {};
        Product: import("@prisma/client/runtime/library").GetResult<{
            id: string;
            name: string;
            description: string;
            downloadProductUrl: string;
            photos: string[];
            profileId: string;
            productCategoryId: string;
            priceId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        priceId: string;
    }, unknown> & {})[]>;
    findAllByProfileId(userId: string, skip: string, take: string): Promise<({
        price: {
            curency: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                code: string;
                label: string;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            amount: import("@prisma/client/runtime/library").Decimal;
            curencyId: string;
        }, unknown> & {};
        Product: import("@prisma/client/runtime/library").GetResult<{
            id: string;
            name: string;
            description: string;
            downloadProductUrl: string;
            photos: string[];
            profileId: string;
            productCategoryId: string;
            priceId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        priceId: string;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        priceId: string;
    }, unknown> & {}>;
    update(id: string, updateSaleDto: UpdateBodySalesDadaDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        priceId: string;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        priceId: string;
    }, unknown> & {}>;
}
