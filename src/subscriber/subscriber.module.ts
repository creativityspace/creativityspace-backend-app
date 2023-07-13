import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SubscriberController],
  providers: [SubscriberService, PrismaService],
})
export class SubscriberModule {}
