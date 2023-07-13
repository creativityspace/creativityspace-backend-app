import { BodyProductDadaDto } from './dto/create-product.dto';
import { UpdateBodyProductDadaDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: BodyProductDadaDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {}>;
    findAll(params: {
        skip?: number;
        take?: number;
    }): Promise<({
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
        Profile: {
            user: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                email: string;
                userID: string;
                name: string;
                userName: string;
                role: import(".prisma/client").Role;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            avatarUrl: string;
            bio: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
        Ratings: (import("@prisma/client/runtime/library").GetResult<{
            id: string;
            rating: import("@prisma/client/runtime/library").Decimal;
            productId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {})[]>;
    searchAll(params: {
        skip?: number;
        take?: number;
        searchBody?: string;
    }): Promise<({
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
        Profile: {
            user: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                email: string;
                userID: string;
                name: string;
                userName: string;
                role: import(".prisma/client").Role;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            avatarUrl: string;
            bio: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
        Ratings: (import("@prisma/client/runtime/library").GetResult<{
            id: string;
            rating: import("@prisma/client/runtime/library").Decimal;
            productId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {})[]>;
    findAllByProfileId(profileId: string, params: {
        skip?: number;
        take?: number;
    }): Promise<({
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
        Profile: {
            user: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                email: string;
                userID: string;
                name: string;
                userName: string;
                role: import(".prisma/client").Role;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            avatarUrl: string;
            bio: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
        Ratings: (import("@prisma/client/runtime/library").GetResult<{
            id: string;
            rating: import("@prisma/client/runtime/library").Decimal;
            productId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {})[]>;
    SearchAllByProfileId(profileId: string, params: {
        skip?: number;
        take?: number;
        searchBody?: string;
    }): Promise<({
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
        Profile: {
            user: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                email: string;
                userID: string;
                name: string;
                userName: string;
                role: import(".prisma/client").Role;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            avatarUrl: string;
            bio: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
        Ratings: (import("@prisma/client/runtime/library").GetResult<{
            id: string;
            rating: import("@prisma/client/runtime/library").Decimal;
            productId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {})[]>;
    findAllByCategory(category: string, params: {
        skip?: number;
        take?: number;
    }): Promise<({
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
        Profile: {
            user: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                email: string;
                userID: string;
                name: string;
                userName: string;
                role: import(".prisma/client").Role;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            avatarUrl: string;
            bio: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
        Ratings: (import("@prisma/client/runtime/library").GetResult<{
            id: string;
            rating: import("@prisma/client/runtime/library").Decimal;
            productId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {})[]>;
    findOne(id: string): Promise<{
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
        Profile: {
            user: import("@prisma/client/runtime/library").GetResult<{
                id: string;
                email: string;
                userID: string;
                name: string;
                userName: string;
                role: import(".prisma/client").Role;
                createdAt: Date;
                updatedAt: Date;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: string;
            avatarUrl: string;
            bio: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
        Ratings: (import("@prisma/client/runtime/library").GetResult<{
            id: string;
            rating: import("@prisma/client/runtime/library").Decimal;
            productId: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {}>;
    update(id: string, updateProductDto: UpdateBodyProductDadaDto): Promise<{
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
    } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown> & {}>;
}
