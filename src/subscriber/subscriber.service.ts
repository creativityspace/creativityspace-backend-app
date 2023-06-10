import { Injectable } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriberService {
  constructor(private prisma: PrismaService) {}
  create(createSubscriberDto: CreateSubscriberDto) {
    return this.prisma.subscriber.create({data:createSubscriberDto});
  }

  findAll() {
    return this.prisma.subscriber.findMany();
  }

  findOne(id: string) {
    return this.prisma.subscriber.findUnique({where:{id: id}});
  }

  update(id: string, updateSubscriberDto: UpdateSubscriberDto) {
    return this.prisma.subscriber.update({data:updateSubscriberDto, where:{id:id}});
  }

  remove(id: string) {
    return this.prisma.subscriber.delete({where: {id: id}});
  }
}
