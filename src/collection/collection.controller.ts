import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Request,
} from '@nestjs/common';
import { CollectionService } from './collection.service';
import {
  BodyCollectionBada,
  CreateCollectionDto,
} from './dto/create-collection.dto';
import {
  UpdateBodyCollectionBada,
  UpdateCollectionDto,
} from './dto/update-collection.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Public()
  @Post()
  async create(@Body() createCollectionDto: BodyCollectionBada) {
    console.log(createCollectionDto.colection);
    console.log(createCollectionDto.price);
    return this.collectionService.create(createCollectionDto);
  }
  @Public()
  @Get()
  async findAll() {
    return this.collectionService.findAll();
  }
  @Public()
  @Get('user/:id')
  async findAllByUser(
    @Param('id') id: string,
    @Headers() Headers,
    @Request() req,
  ) {
    return this.collectionService.findAllByUserId(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.collectionService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCollectionDto: UpdateBodyCollectionBada,
  ) {
    return this.collectionService.update(id, updateCollectionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.collectionService.remove(id);
  }
}
