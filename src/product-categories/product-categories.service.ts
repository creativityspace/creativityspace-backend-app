import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductCategoriesService {
  constructor(private prisma: PrismaService) {}
  async create(createProductCategoryDto: CreateProductCategoryDto) {
    return this.prisma.productCategories.create({
      data: createProductCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.productCategories.findMany();
  }

  async findOne(id: string) {
    return this.prisma.productCategories.findUnique({ where: { id: id } });
  }

  async update(id: string, updateProductCategoryDto: UpdateProductCategoryDto) {
    return this.prisma.productCategories.update({
      data: updateProductCategoryDto,
      where: { id: id },
    });
  }

  async remove(id: string) {
    return this.prisma.productCategories.delete({ where: { id: id } });
  }
}
