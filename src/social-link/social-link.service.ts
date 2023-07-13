import { Injectable } from '@nestjs/common';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SocialLinkService {
  constructor(private prisma: PrismaService) {}
  async create(createSocialLinkDto: CreateSocialLinkDto) {
    return this.prisma.socialLink.create({ data: createSocialLinkDto });
  }
  async createMany(createSocialLinkDto: Array<CreateSocialLinkDto>) {
    return this.prisma.socialLink.createMany({ data: createSocialLinkDto });
  }

  async findAll() {
    return this.prisma.socialLink.findMany();
  }

  async findOne(id: string) {
    return this.prisma.socialLink.findMany({ where: { id: id } });
  }

  async update(id: string, updateSocialLinkDto: UpdateSocialLinkDto) {
    return this.prisma.socialLink.update({
      data: updateSocialLinkDto,
      where: { id: id },
    });
  }

  async remove(id: string) {
    return this.prisma.socialLink.delete({ where: { id: id } });
  }
}
