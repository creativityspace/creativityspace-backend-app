import { Injectable } from '@nestjs/common';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FollowerService {
  constructor(private prisma: PrismaService) {}
  create(createFollowerDto: CreateFollowerDto) {
    return this.prisma.follower.create({data:createFollowerDto});
  }

  findAll() {
    return this.prisma.follower.findMany();
  }

  findOne(id: string) {
    return this.prisma.follower.findUnique({where:{id:id}});
  }

  update(id: string, updateFollowerDto: UpdateFollowerDto) {
    return this.prisma.follower.update({data: updateFollowerDto, where:{id: id}});
  }

  remove(id: string) {
    return this.prisma.follower.delete({where:{id: id}});
  }
}
