import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CollectionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCollectionDto: CreateCollectionDto): import(".prisma/client").Prisma.Prisma__CollectionClient<import(".prisma/client").Collection, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Collection[]>;
    findAllByProfileId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Collection[]>;
    findAllByUserId(author: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Collection[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CollectionClient<import(".prisma/client").Collection, never>;
    update(id: string, updateCollectionDto: UpdateCollectionDto): import(".prisma/client").Prisma.Prisma__CollectionClient<import(".prisma/client").Collection, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CollectionClient<import(".prisma/client").Collection, never>;
}
