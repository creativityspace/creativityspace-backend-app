import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SubscriberService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSubscriberDto: CreateSubscriberDto): import(".prisma/client").Prisma.Prisma__SubscriberClient<import(".prisma/client").Subscriber, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Subscriber[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SubscriberClient<import(".prisma/client").Subscriber, never>;
    update(id: string, updateSubscriberDto: UpdateSubscriberDto): import(".prisma/client").Prisma.Prisma__SubscriberClient<import(".prisma/client").Subscriber, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SubscriberClient<import(".prisma/client").Subscriber, never>;
}
