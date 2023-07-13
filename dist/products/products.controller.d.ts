import { ProductsService } from './products.service';
import { BodyProductDadaDto } from './dto/create-product.dto';
import { UpdateBodyProductDadaDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
    findAll(skip: string, take: string): Promise<({
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
    searchAll(skip: string, take: string, searchBody: string): Promise<({
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
    findAllByCategory(categoryId: string, skip: string, take: string): Promise<({
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
    findProfileId(profileId: string, skip: string, take: string): Promise<({
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
    findPublicProfileId(profileId: string, skip: string, take: string): Promise<({
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
    searchProfileId(profileId: string, skip: string, take: string, searchBody: string): Promise<({
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
