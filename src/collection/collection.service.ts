import { Injectable } from '@nestjs/common';
import {
  BodyCollectionBada,
  CreateCollectionDto,
  Price,
} from './dto/create-collection.dto';
import {
  UpdateBodyCollectionBada,
  UpdateCollectionDto,
} from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}
  async create(createCollectionDto: BodyCollectionBada) {
    var pricedata = this.prisma.price.create({
      data: createCollectionDto.price,
    });

    return this.prisma.collection.create({
      data: {
        ...createCollectionDto.colection,
        priceId: (await pricedata).id,
      },
    });
  }

  async findAll() {
    return this.prisma.collection.findMany({
      include: { accessPrice: { include: { curency: true } } },
    });
  }
  async findAllByProfileId(id: string) {
    return this.prisma.collection.findMany({
      where: { profileId: id },
      include: { accessPrice: { include: { curency: true } } },
    });
  }

  async findAllByUserId(author: string) {
    return this.prisma.collection.findMany({
      where: { Profile: { is: { userId: author } } },
      include: { accessPrice: { include: { curency: true } } },
    });
  }

  async findOne(id: string) {
    return this.prisma.collection.findUnique({
      where: { id: id },
      include: { accessPrice: { include: { curency: true } } },
    });
  }

  async update(id: string, updateCollectionDto: UpdateBodyCollectionBada) {
    var pricedata = this.prisma.price.create({
      data: updateCollectionDto.price,
    });
    return this.prisma.collection.update({
      data: { ...updateCollectionDto, priceId: (await pricedata).id },
      where: { id: id },
      include: { accessPrice: { include: { curency: true } } },
    });
  }

  async remove(id: string) {
    return this.prisma.collection.delete({ where: { id: id } });
  }
}
