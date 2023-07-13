import { BodyCollectionBada } from './dto/create-collection.dto';
import { UpdateBodyCollectionBada } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CollectionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCollectionDto: BodyCollectionBada): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        description: string;
        bennerUrl: string;
        isFree: boolean;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
        priceId: string;
    }, unknown> & {}>;
    findAll(): Promise<({
        accessPrice: {
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
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        description: string;
        bennerUrl: string;
        isFree: boolean;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
        priceId: string;
    }, unknown> & {})[]>;
    findAllByProfileId(id: string): Promise<({
        accessPrice: {
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
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        description: string;
        bennerUrl: string;
        isFree: boolean;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
        priceId: string;
    }, unknown> & {})[]>;
    findAllByUserId(author: string): Promise<({
        accessPrice: {
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
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        description: string;
        bennerUrl: string;
        isFree: boolean;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
        priceId: string;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<{
        accessPrice: {
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
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        description: string;
        bennerUrl: string;
        isFree: boolean;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
        priceId: string;
    }, unknown> & {}>;
    update(id: string, updateCollectionDto: UpdateBodyCollectionBada): Promise<{
        accessPrice: {
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
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        description: string;
        bennerUrl: string;
        isFree: boolean;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
        priceId: string;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        description: string;
        bennerUrl: string;
        isFree: boolean;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        profileId: string;
        priceId: string;
    }, unknown> & {}>;
}
