import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
export declare class CollectionController {
    private readonly collectionService;
    constructor(collectionService: CollectionService);
    create(createCollectionDto: CreateCollectionDto): import(".prisma/client").Prisma.Prisma__CollectionClient<import(".prisma/client").Collection, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Collection[]>;
    findAllByUser(id: string, Headers: any, req: any): Promise<import(".prisma/client").Collection[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CollectionClient<import(".prisma/client").Collection, never>;
    update(id: string, updateCollectionDto: UpdateCollectionDto): import(".prisma/client").Prisma.Prisma__CollectionClient<import(".prisma/client").Collection, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CollectionClient<import(".prisma/client").Collection, never>;
}
