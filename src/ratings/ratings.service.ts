import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RatingsService {
  constructor(private prisma: PrismaService) {}
  async create(createRatingDto: CreateRatingDto) {
    return this.prisma.ratings.create({ data: createRatingDto });
  }

  async findAll() {
    return this.prisma.ratings.findMany();
  }

  async findOne(id: string) {
    return this.prisma.ratings.findUnique({ where: { id: id } });
  }

  async update(id: string, updateRatingDto: UpdateRatingDto) {
    return this.prisma.ratings.update({
      data: updateRatingDto,
      where: { id: id },
    });
  }

  async remove(id: string) {
    return this.prisma.ratings.delete({ where: { id: id } });
  }
}
