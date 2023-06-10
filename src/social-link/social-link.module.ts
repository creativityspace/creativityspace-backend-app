import { Module } from '@nestjs/common';
import { SocialLinkService } from './social-link.service';
import { SocialLinkController } from './social-link.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SocialLinkController],
  providers: [SocialLinkService, PrismaService]
})
export class SocialLinkModule {}
