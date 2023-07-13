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
import { ProductsService } from './products.service';
import { BodyProductDadaDto, CreateProductDto } from './dto/create-product.dto';
import {
  UpdateBodyProductDadaDto,
  UpdateProductDto,
} from './dto/update-product.dto';
import { Public } from 'src/auth/decorators/public.decorator';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: BodyProductDadaDto) {
    return this.productsService.create(createProductDto);
  }
  @Public()
  @Get()
  async findAll(@Query('skip') skip: string, @Query('take') take: string) {
    return this.productsService.findAll({
      skip: Number(skip),
      take: Number(take),
    });
  }
  @Public()
  @Get('search')
  async searchAll(
    @Query('skip') skip: string,
    @Query('take') take: string,
    @Query('searchBody') searchBody: string,
  ) {
    return this.productsService.searchAll({
      skip: Number(skip),
      take: Number(take),
      searchBody,
    });
  }
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
  @Public()
  @Get('categoryId/:categoryId')
  async findAllByCategory(
    @Param('categoryId') categoryId: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.productsService.findAllByCategory(categoryId, {
      skip: Number(skip),
      take: Number(take),
    });
  }
  @Get('profile/:id')
  async findProfileId(
    @Param('id') profileId: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.productsService.findAllByProfileId(profileId, {
      skip: Number(skip),
      take: Number(take),
    });
  }
  @Public()
  @Get('public/profile/:id')
  async findPublicProfileId(
    @Param('id') profileId: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.productsService.findAllByProfileId(profileId, {
      skip: Number(skip),
      take: Number(take),
    });
  }
  @Get('profile/search/:id')
  async searchProfileId(
    @Param('id') profileId: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
    @Query('searchBody') searchBody: string,
  ) {
    return this.productsService.SearchAllByProfileId(profileId, {
      skip: Number(skip),
      take: Number(take),
      searchBody: searchBody,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateBodyProductDadaDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
