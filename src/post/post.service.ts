import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({data:createPostDto});
  }

  findAll() {
    return this.prisma.post.findMany(
      {where:{published:true, }, include:{collection:{select:{Profile:{select:{user:true}}}}}}
    );
  }
  
  findAllByCollectionId(id: string) {
    return this.prisma.post.findMany({where:{collectionId: id}});
  }
  
  findAllByProfileId(id: string) {
    return this.prisma.post.findMany({where:{collection:{profileId: id}}});
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({where:{id:id}});
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({data:updatePostDto, where:{id: id}});
  }

  remove(id: string) {
    return this.prisma.post.delete({where:{id:id}});
  }
}
