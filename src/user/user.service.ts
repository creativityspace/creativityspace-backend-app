import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.prisma.user.findMany({ include: { profile: true } });
  }
  async findAllCreator() {
    return this.prisma.user.findMany({
      include: { profile: true },
      where: { role: 'CREATOR' },
    });
  }

  async findSugestionUsers(userid: string, params: { skip?: number; take?: number }) {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return this.prisma.user.findMany({
        skip,
        include: { profile: true },
        where: {
          NOT: { id: { equals: userid } },
          AND: { NOT:{Followers: { some: { userId: userid } }} },
        },
      });
    } else {
      return this.prisma.user.findMany({
        skip,
        take,
        include: { profile: true },
        where: {
          NOT: { id: { equals: userid } },
          AND: { NOT:{Followers: { some: { userId: userid } }} },
        },
      });
    }
    
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  async findOneByUserName(id: string) {
    return this.prisma.user.findUnique({
      where: { userName: id },
      include: {
        profile: {
          include: {
            categories: true,
            collections: {
              where: { isFree: { equals: true } },
              include: {
                accessPrice: false,
                posts: false,
                Profile: false,
                Subscribers: false,
                _count: { select: { posts: true } },
              },
            },
            _count: { select: { followers: true, Products: true } },
          },
        },
      },
    });
  }

  async checkUserName(id: string) {
    return this.prisma.user.findUnique({
      where: { userName: id },
      select: { userName: true },
    });
  }

  async findOneByUserID(id: string) {
    return this.prisma.user.findUnique({
      where: { userID: id },
      include: {
        profile: true,
        _count: { select: { Subscribers: true } },
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ data: updateUserDto, where: { id: id } });
  }

  async remove(id: string) {
    return this.prisma.user.delete({ where: { id: id } });
  }
}
