import { SocialLinkService } from './social-link.service';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';
export declare class SocialLinkController {
    private readonly socialLinkService;
    constructor(socialLinkService: SocialLinkService);
    create(createSocialLinkDto: CreateSocialLinkDto): import(".prisma/client").Prisma.Prisma__SocialLinkClient<import(".prisma/client").SocialLink, never>;
    createMany(createSocialLinkDto: Array<CreateSocialLinkDto>): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").SocialLink[]>;
    findOne(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").SocialLink[]>;
    update(id: string, updateSocialLinkDto: UpdateSocialLinkDto): import(".prisma/client").Prisma.Prisma__SocialLinkClient<import(".prisma/client").SocialLink, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SocialLinkClient<import(".prisma/client").SocialLink, never>;
}
