import { SubscriberService } from './subscriber.service';
import { BodySubscriberDadaDto } from './dto/create-subscriber.dto';
import { UpdateBodySubscriberDadaDto } from './dto/update-subscriber.dto';
export declare class SubscriberController {
    private readonly subscriberService;
    constructor(subscriberService: SubscriberService);
    create(createSubscriberDto: BodySubscriberDadaDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        collectionId: string;
        status: boolean;
        userId: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
        payementMethod: string;
        updatedAt: Date;
        priceId: string;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        collectionId: string;
        status: boolean;
        userId: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
        payementMethod: string;
        updatedAt: Date;
        priceId: string;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        collectionId: string;
        status: boolean;
        userId: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
        payementMethod: string;
        updatedAt: Date;
        priceId: string;
    }, unknown> & {}>;
    update(id: string, updateSubscriberDto: UpdateBodySubscriberDadaDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        collectionId: string;
        status: boolean;
        userId: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
        payementMethod: string;
        updatedAt: Date;
        priceId: string;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        collectionId: string;
        status: boolean;
        userId: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
        payementMethod: string;
        updatedAt: Date;
        priceId: string;
    }, unknown> & {}>;
}
