import { Injectable } from '@nestjs/common';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FollowerService {
  constructor(private prisma: PrismaService) {}
  async create(createFollowerDto: CreateFollowerDto) {
    return this.prisma.follower.create({ data: createFollowerDto });
  }

  async findAll() {
    return this.prisma.follower.findMany();
  }

  async findOne(id: string) {
    return this.prisma.follower.findUnique({ where: { id: id } });
  }

  async update(id: string, updateFollowerDto: UpdateFollowerDto) {
    return this.prisma.follower.update({
      data: updateFollowerDto,
      where: { id: id },
    });
  }

  async remove(id: string) {
    return this.prisma.follower.delete({ where: { id: id } });
  }
}
