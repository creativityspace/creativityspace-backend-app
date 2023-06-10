import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}
  create(createSaleDto: CreateSaleDto) {
    return this.prisma.sales.create({data: createSaleDto});
  }

  findAll() {
    return this.prisma.sales.findMany();
  }

  findOne(id: string) {
    return this.prisma.sales.findUnique({where:{id:id}});
  }

  update(id: string, updateSaleDto: UpdateSaleDto) {
    return this.prisma.sales.update({data:updateSaleDto, where:{id}});
  }

  remove(id: string) {
    return this.prisma.sales.delete({where:{id:id}});
  }
}
