import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get(':userId')
  async findAll(
    @Param('userId') userId: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.postService.findAll(userId, {
      skip: Number(skip),
      take: Number(take),
    });
  }

  @Get('collection/:id')
  async findAllByCollectionId(
    @Param('id') id: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.postService.findAllByCollectionId(id, {
      skip: Number(skip),
      take: Number(take),
    });
  }
  @Get('profileId/:id')
  async findAllByProfileId(
    @Param('id') id: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.postService.findAllByProfileId(id, {
      skip: Number(skip),
      take: Number(take),
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
