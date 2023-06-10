import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RatingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRatingDto: CreateRatingDto): import(".prisma/client").Prisma.Prisma__RatingsClient<import(".prisma/client").Ratings, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Ratings[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__RatingsClient<import(".prisma/client").Ratings, never>;
    update(id: string, updateRatingDto: UpdateRatingDto): import(".prisma/client").Prisma.Prisma__RatingsClient<import(".prisma/client").Ratings, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__RatingsClient<import(".prisma/client").Ratings, never>;
}
