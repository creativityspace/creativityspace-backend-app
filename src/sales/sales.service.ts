import { Injectable } from '@nestjs/common';
import { BodySalesDadaDto, CreateSaleDto } from './dto/create-sale.dto';
import { UpdateBodySalesDadaDto, UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}
  async create(createSaleDto: BodySalesDadaDto) {
    var pricedata = this.prisma.price.create({ data: createSaleDto.price });
    return this.prisma.sales.create({
      data: { ...createSaleDto.sale, priceId: (await pricedata).id },
    });
  }

  async findAll() {
    return this.prisma.sales.findMany();
  }
  async findAllByUserId(
    userId: string,
    params: {
      skip?: number;
      take?: number;
    },
  ) {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return this.prisma.sales.findMany({
        skip,
        where: { userId: userId },
        include: { price: { include: { curency: true } }, Product: true },
        orderBy: { createdAt: 'desc' },
      });
    } else {
      return this.prisma.sales.findMany({
        skip,
        take,
        where: { userId: userId },
        include: { price: { include: { curency: true } }, Product: true },
        orderBy: { createdAt: 'desc' },
      });
    }
  }
  async findAllByProfileId(
    profileId: string,
    params: {
      skip?: number;
      take?: number;
    },
  ) {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return this.prisma.sales.findMany({
        skip,
        where: { Product: { profileId: profileId } },
        include: { price: { include: { curency: true } }, Product: true },
        orderBy: { createdAt: 'desc' },
      });
    } else {
      return this.prisma.sales.findMany({
        skip,
        take,
        where: { Product: { profileId: profileId } },
        include: { price: { include: { curency: true } }, Product: true },
        orderBy: { createdAt: 'desc' },
      });
    }
  }

  async findOne(id: string) {
    return this.prisma.sales.findUnique({ where: { id: id } });
  }

  async update(id: string, updateSaleDto: UpdateBodySalesDadaDto) {
    var pricedata = this.prisma.price.create({ data: updateSaleDto.price });
    return this.prisma.sales.update({
      data: { ...updateSaleDto.sale, priceId: (await pricedata).id },
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.sales.delete({ where: { id: id } });
  }
}
