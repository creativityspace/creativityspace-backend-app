import { Injectable } from '@nestjs/common';
import {
  BodySubscriberDadaDto,
  CreateSubscriberDto,
} from './dto/create-subscriber.dto';
import {
  UpdateBodySubscriberDadaDto,
  UpdateSubscriberDto,
} from './dto/update-subscriber.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriberService {
  constructor(private prisma: PrismaService) {}
  async create(createSubscriberDto: BodySubscriberDadaDto) {
    var pricedata = this.prisma.price.create({
      data: createSubscriberDto.price,
    });
    return this.prisma.subscriber.create({
      data: {
        ...createSubscriberDto.subscriber,
        status: true,
        priceId: (await pricedata).id as never,
      },
    });
  }

  async findAll() {
    return this.prisma.subscriber.findMany();
  }

  async findOne(id: string) {
    return this.prisma.subscriber.findUnique({ where: { id: id } });
  }

  async update(id: string, updateSubscriberDto: UpdateBodySubscriberDadaDto) {
    var pricedata = this.prisma.price.create({
      data: updateSubscriberDto.price,
    });
    return this.prisma.subscriber.update({
      data: {
        ...updateSubscriberDto.subscriber,
        priceId: (await pricedata).id,
      },
      where: { id: id },
    });
  }

  async remove(id: string) {
    return this.prisma.subscriber.delete({ where: { id: id } });
  }
}
