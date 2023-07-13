import { Injectable } from '@nestjs/common';
import { BodyProductDadaDto, CreateProductDto } from './dto/create-product.dto';
import {
  UpdateBodyProductDadaDto,
  UpdateProductDto,
} from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: BodyProductDadaDto) {
    var pricedata = await this.prisma.price.create({
      data: createProductDto.price,
    });
    console.log(pricedata);

    return this.prisma.products.create({
      data: { ...createProductDto.product, priceId: (await pricedata).id },
    });
  }

  async findAll(params: { skip?: number; take?: number }) {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return this.prisma.products.findMany({
        skip: skip,
        orderBy: { createdAt: 'desc' },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    } else {
      return this.prisma.products.findMany({
        skip: skip,
        take: take,
        orderBy: { createdAt: 'desc' },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    }
  }
  async searchAll(params: {
    skip?: number;
    take?: number;
    searchBody?: string;
  }) {
    const { skip, take, searchBody } = params;
    if (isNaN(skip)) {
      return this.prisma.products.findMany({
        where: {
          description: { search: searchBody },
          name: { search: searchBody },
          ProductCategory: { name: { search: searchBody } },
        },
        skip: skip,
        orderBy: { createdAt: 'desc' },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    } else {
      return this.prisma.products.findMany({
        where: {
          description: { search: searchBody },
          name: { search: searchBody },
          ProductCategory: { name: { search: searchBody } },
        },
        skip: skip,
        take: take,
        orderBy: { createdAt: 'desc' },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
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
      return this.prisma.products.findMany({
        skip: skip,
        orderBy: { createdAt: 'desc' },
        where: { profileId: profileId },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    } else {
      return this.prisma.products.findMany({
        skip: skip,
        take: take,
        orderBy: { createdAt: 'desc' },
        where: { profileId: profileId },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    }
  }
  async SearchAllByProfileId(
    profileId: string,
    params: {
      skip?: number;
      take?: number;
      searchBody?: string;
    },
  ) {
    const { skip, take, searchBody } = params;
    if (isNaN(skip)) {
      return this.prisma.products.findMany({
        skip: skip,
        orderBy: { createdAt: 'desc' },
        where: {
          profileId: profileId,
          description: { search: searchBody },
          name: { search: searchBody },
          ProductCategory: { name: { search: searchBody } },
        },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    } else {
      return this.prisma.products.findMany({
        skip: skip,
        take: take,
        orderBy: { createdAt: 'desc' },
        where: {
          profileId: profileId,
          description: { search: searchBody },
          name: { search: searchBody },
          ProductCategory: { name: { search: searchBody } },
        },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    }
  }

  async findAllByCategory(
    category: string,
    params: {
      skip?: number;
      take?: number;
    },
  ) {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return this.prisma.products.findMany({
        skip: skip,
        orderBy: { createdAt: 'desc' },
        where: { ProductCategory: { id: category } },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    } else {
      return this.prisma.products.findMany({
        skip: skip,
        take: take,
        orderBy: { createdAt: 'desc' },
        where: { ProductCategory: { id: category } },
        include: {
          Profile: { include: { user: true } },
          Ratings: true,
          price: { include: { curency: true } },
        },
      });
    }
  }
  async findOne(id: string) {
    return this.prisma.products.findUnique({
      where: { id: id },
      include: {
        Profile: { include: { user: true } },
        Ratings: true,
        price: { include: { curency: true } },
      },
    });
  }

  async update(id: string, updateProductDto: UpdateBodyProductDadaDto) {
    var pricedata = this.prisma.price.create({ data: updateProductDto.price });
    return this.prisma.products.update({
      data: { ...updateProductDto.product, priceId: (await pricedata).id },
      where: { id: id },
      include: { price: { include: { curency: true } } },
    });
  }

  async remove(id: string) {
    return this.prisma.products.delete({ where: { id: id } });
  }
}
