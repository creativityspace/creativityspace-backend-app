import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
export declare class RatingsController {
    private readonly ratingsService;
    constructor(ratingsService: RatingsService);
    create(createRatingDto: CreateRatingDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: string, updateRatingDto: UpdateRatingDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
