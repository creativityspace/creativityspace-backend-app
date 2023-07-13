import { ApiProperty } from '@nestjs/swagger';
import { SocialApp } from '@prisma/client';

export class CreateSocialLinkDto {
  @ApiProperty()
  url: string;
  @ApiProperty()
  socialApp: SocialApp;

  @ApiProperty({ required: true })
  profileId: string;
}

export class CreateSocialLinkManyDto {
  @ApiProperty()
  data: Array<CreateSocialLinkDto>;
}
