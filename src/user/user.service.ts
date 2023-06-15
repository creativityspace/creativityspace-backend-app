import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({data : createUserDto});
  }

  findAll() {
    return this.prisma.user.findMany({include:{profile: true}});
  }
  findSugestionUsers(userid: string) {
    return this.prisma.user.findMany({include:{profile: true}, where:{Followers:{some:{userId:{not:userid}}, every:{userId:{notIn:userid}}}}});
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({where:{ id: id}});
  }
  findOneByUserName(id: string) {
    return this.prisma.user.findUnique({where:{ userName: id}, include:{
      profile:true, _count:{select:{Subscribers:true}}
    }});
  }
  checkUserName(id: string) {
    return this.prisma.user.findUnique({where:{ userName: id}, select:{userName:true}});
  }
  findOneByUserID(id: string) {
    return this.prisma.user.findUnique({where:{ userID: id}, include:{
      profile:true, _count:{select:{Subscribers:true}}
    }});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({data: updateUserDto, where:{id:id}});
  }

  remove(id: string) {
    return this.prisma.user.delete({where:{id: id}});
  }
}
