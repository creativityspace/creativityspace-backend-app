import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
export declare class RatingsController {
    private readonly ratingsService;
    constructor(ratingsService: RatingsService);
    create(createRatingDto: CreateRatingDto): import(".prisma/client").Prisma.Prisma__RatingsClient<import(".prisma/client").Ratings, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Ratings[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__RatingsClient<import(".prisma/client").Ratings, never>;
    update(id: string, updateRatingDto: UpdateRatingDto): import(".prisma/client").Prisma.Prisma__RatingsClient<import(".prisma/client").Ratings, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__RatingsClient<import(".prisma/client").Ratings, never>;
}
