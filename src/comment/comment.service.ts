import { Injectable } from '@nestjs/common';
import {
  CreateCommentForPostDto,
  CreateCommentForProductDto,
} from './dto/create-comment.dto';
import {
  UpdateCommentForPostDto,
  UpdateCommentForProductDto,
} from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  async createForPost(createCommentDto: CreateCommentForPostDto) {
    return this.prisma.comment.create({ data: createCommentDto });
  }
  async createForProduct(createCommentDto: CreateCommentForProductDto) {
    return this.prisma.comment.create({ data: createCommentDto });
  }

  async findAll() {
    return this.prisma.comment.findMany();
  }
  async findAllByPostId(id: string) {
    return this.prisma.comment.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: { include: { profile: true } } },
      where: { postId: id },
    });
  }
  async findAllByProductId(id: string) {
    return this.prisma.comment.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: { include: { profile: true } } },
      where: { productId: id },
    });
  }

  async findOne(id: string) {
    return this.prisma.comment.findUnique({ where: { id: id } });
  }

  async updateForPost(id: string, updateCommentDto: UpdateCommentForPostDto) {
    return this.prisma.comment.update({
      where: { id: id },
      data: updateCommentDto,
    });
  }
  async updateForProduct(
    id: string,
    updateCommentDto: UpdateCommentForProductDto,
  ) {
    return this.prisma.comment.update({
      where: { id: id },
      data: updateCommentDto,
    });
  }

  async remove(id: string) {
    return this.prisma.comment.delete({ where: { id: id } });
  }
}
