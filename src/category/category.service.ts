import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({data: createCategoryDto});
  }

  createMany(createCategoryDto:Array< CreateCategoryDto>) {
    return this.prisma.category.createMany({data: createCategoryDto});
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({where:{id:id}});
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({data: updateCategoryDto, where:{id:id}});
  }

  remove(id: string) {
    return this.prisma.category.delete({where:{id:id}});
  }
}
