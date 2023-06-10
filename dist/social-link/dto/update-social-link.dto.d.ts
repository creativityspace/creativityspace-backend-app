import { CreateSocialLinkDto } from './create-social-link.dto';
import { SocialApp } from '@prisma/client';
declare const UpdateSocialLinkDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSocialLinkDto>>;
export declare class UpdateSocialLinkDto extends UpdateSocialLinkDto_base {
    url: string;
    socialApp: SocialApp;
}
export {};
