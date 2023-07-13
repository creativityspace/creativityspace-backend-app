import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FollowerService } from './follower.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('follower')
export class FollowerController {
  constructor(private readonly followerService: FollowerService) {}

  @Post()
  async create(@Body() createFollowerDto: CreateFollowerDto) {
    return this.followerService.create(createFollowerDto);
  }
  @Public()
  @Get()
  async findAll() {
    return this.followerService.findAll();
  }
  @Public()
  @Get()
  async findAllByUser() {
    return this.followerService.findAll();
  }
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.followerService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFollowerDto: UpdateFollowerDto,
  ) {
    return this.followerService.update(id, updateFollowerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.followerService.remove(id);
  }
}
