import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialLinkDto } from './create-social-link.dto';
import { ApiProperty } from '@nestjs/swagger';
import { SocialApp } from '@prisma/client';

export class UpdateSocialLinkDto extends PartialType(CreateSocialLinkDto) {
    @ApiProperty({ required: true, })
    url: string;
    @ApiProperty({ required: true, })
    socialApp: SocialApp;
  
}

