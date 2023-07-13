import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({ data: createPostDto });
  }

  async findAll(userId: string, params: { skip?: number; take?: number }) {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return this.prisma.post.findMany({
        skip: skip,
        where: {
          published: true,
          collection: {
            isFree: true,
            
          },
        },
        orderBy: { createdAt: 'desc' },
        include: {
          collection: {
            select: {
              Profile: { select: { user: true, avatarUrl: true, id: true } },
            },
          },
          comments: { include: { user: true } },
        },
      });
    } else {
      return this.prisma.post.findMany({
        skip: skip,
        take: take,
        where: {
          published: true,
          collection: {
            isFree: true,
          
          },
        },
        orderBy: { createdAt: 'desc' },
        include: {
          collection: {
            select: {
              Profile: { select: { user: true, avatarUrl: true, id: true } },
            },
          },
          comments: { include: { user: true } },
        },
      });
    }
  }

  async findAllByCollectionId(
    id: string,
    params: {
      skip?: number;
      take?: number;
    },
  ) {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return this.prisma.post.findMany({
        skip: skip,
        orderBy: { createdAt: 'desc' },
        where: { collectionId: id },
      });
    } else {
      return this.prisma.post.findMany({
        skip: skip,
        take: take,
        orderBy: { createdAt: 'desc' },
        where: { collectionId: id },
      });
    }
  }

  async findAllByProfileId(
    id: string,
    params: {
      skip?: number;
      take?: number;
    },
  ) {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return this.prisma.post.findMany({
        skip: skip,
        orderBy: { createdAt: 'desc' },
        where: { collection: { profileId: id } },
      });
    } else {
      return this.prisma.post.findMany({
        skip: skip,
        take: take,
        orderBy: { createdAt: 'desc' },
        where: { collection: { profileId: id } },
      });
    }
  }

  async findOne(id: string) {
    return this.prisma.post.findUnique({ where: { id: id } });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({ data: updatePostDto, where: { id: id } });
  }

  async remove(id: string) {
    return this.prisma.post.delete({ where: { id: id } });
  }
}
