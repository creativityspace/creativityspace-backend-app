import { SocialLinkService } from './social-link.service';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';
export declare class SocialLinkController {
    private readonly socialLinkService;
    constructor(socialLinkService: SocialLinkService);
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
