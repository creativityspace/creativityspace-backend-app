import { SocialApp } from '@prisma/client';
export declare class CreateSocialLinkDto {
    url: string;
    socialApp: SocialApp;
    profileId: string;
}
export declare class CreateSocialLinkManyDto {
    data: Array<CreateSocialLinkDto>;
}
