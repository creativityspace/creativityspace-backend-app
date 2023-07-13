import { Module } from '@nestjs/common';
import { DeviseService } from './devise.service';
import { DeviseController } from './devise.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DeviseController],
  providers: [DeviseService, PrismaService],
})
export class DeviseModule {}
