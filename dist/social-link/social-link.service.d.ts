import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SocialLinkService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSocialLinkDto: CreateSocialLinkDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        url: string;
        socialApp: import(".prisma/client").SocialApp;
        profileId: string;
    }, unknown> & {}>;
    createMany(createSocialLinkDto: Array<CreateSocialLinkDto>): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        url: string;
        socialApp: import(".prisma/client").SocialApp;
        profileId: string;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        url: string;
        socialApp: import(".prisma/client").SocialApp;
        profileId: string;
    }, unknown> & {})[]>;
    update(id: string, updateSocialLinkDto: UpdateSocialLinkDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        url: string;
        socialApp: import(".prisma/client").SocialApp;
        profileId: string;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        url: string;
        socialApp: import(".prisma/client").SocialApp;
        profileId: string;
    }, unknown> & {}>;
}
