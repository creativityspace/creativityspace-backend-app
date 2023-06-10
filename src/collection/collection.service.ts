import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}
  create(createCollectionDto: CreateCollectionDto) {
    return this.prisma.collection.create({data: createCollectionDto});
  }

  findAll() {
    return this.prisma.collection.findMany();
  }
  findAllByProfileId(id: string) {
    return this.prisma.collection.findMany({where:{profileId: id}});
  }

  findAllByUserId( author: string) {
    return this.prisma.collection.findMany({where:{Profile: {is:{userId: author}}}});
  }

  findOne(id: string) {
    return this.prisma.collection.findUnique({where:{id:id}});
  }

  update(id: string, updateCollectionDto: UpdateCollectionDto) {
    return this.prisma.collection.update({data: updateCollectionDto, where:{id: id}});
  }

  remove(id: string) {
    return this.prisma.collection.delete({where:{id:id}});
  }
}
