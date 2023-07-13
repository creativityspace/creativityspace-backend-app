import { Injectable } from '@nestjs/common';
import { CreateDeviseDto } from './dto/create-devise.dto';
import { UpdateDeviseDto } from './dto/update-devise.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeviseService {
  constructor(private prisma: PrismaService) {}
  async create(createDeviseDto: CreateDeviseDto) {
    return this.prisma.curency.create({ data: createDeviseDto });
  }

  async findAll() {
    return this.prisma.curency.findMany();
  }

  async findOne(id: string) {
    return this.prisma.curency.findUnique({ where: { id: id } });
  }

  async update(id: string, updateDeviseDto: UpdateDeviseDto) {
    return this.prisma.curency.update({
      where: { id: id },
      data: updateDeviseDto,
    });
  }

  async remove(id: string) {
    return this.prisma.curency.delete({ where: { id: id } });
  }
}
