import { Module } from '@nestjs/common';
import { FollowerService } from './follower.service';
import { FollowerController } from './follower.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FollowerController],
  providers: [FollowerService, PrismaService]
})
export class FollowerModule {}
