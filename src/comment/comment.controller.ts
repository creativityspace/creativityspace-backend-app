import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import {
  CreateCommentForProductDto,
  CreateCommentForPostDto,
} from './dto/create-comment.dto';
import {
  UpdateCommentForPostDto,
  UpdateCommentForProductDto,
} from './dto/update-comment.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Public()
  @Post('/post')
  async createForPost(@Body() createCommentDto: CreateCommentForPostDto) {
    return this.commentService.createForPost(createCommentDto);
  }
  @Public()
  @Post('/product')
  async createForProduct(@Body() createCommentDto: CreateCommentForProductDto) {
    return this.commentService.createForProduct(createCommentDto);
  }

  @Get()
  async findAll() {
    return this.commentService.findAll();
  }
  @Public()
  @Get('post/:postId')
  async findAllByPostId(@Param('postId') id: string) {
    return this.commentService.findAllByPostId(id);
  }
  @Public()
  @Get('product/:productId')
  async findAllByProductId(@Param('productId') id: string) {
    return this.commentService.findAllByProductId(id);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Patch('post/:id')
  async updateForPost(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentForPostDto,
  ) {
    return this.commentService.updateForPost(id, updateCommentDto);
  }
  @Patch('product/:id')
  async updateForProduct(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentForProductDto,
  ) {
    return this.commentService.updateForProduct(id, updateCommentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.commentService.remove(id);
  }
}
