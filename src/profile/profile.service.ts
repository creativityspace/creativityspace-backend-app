import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoriesProfileDto } from './dto/categories-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  async create(createProfileDto: CreateProfileDto) {
    return this.prisma.profile.create({ data: createProfileDto });
  }

  async findAll() {
    return this.prisma.profile.findMany();
  }

  async findOne(id: string) {
    return this.prisma.profile.findUnique({ where: { id: id } });
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile.update({
      data: updateProfileDto,
      where: { id: id },
    });
  }

  async updateCategory(
    id: string,
    updateCategoriesProfileDto: CategoriesProfileDto[],
  ) {
    return this.prisma.profile.update({
      where: { id: id },
      data: {
        categories: { connect: updateCategoriesProfileDto },
      },
      include: {
        categories: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.profile.delete({ where: { id: id } });
  }
}
