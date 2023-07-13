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
import { SalesService } from './sales.service';
import { BodySalesDadaDto, CreateSaleDto } from './dto/create-sale.dto';
import { UpdateBodySalesDadaDto, UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  async create(@Body() createSaleDto: BodySalesDadaDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  async findAll() {
    return this.salesService.findAll();
  }

  @Get('user/:userId')
  async findAllByUserId(
    @Param('userId') userId: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.salesService.findAllByUserId(userId, {
      skip: Number(skip),
      take: Number(take),
    });
  }
  @Get('profile/:ProfileId')
  async findAllByProfileId(
    @Param('ProfileId') userId: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.salesService.findAllByProfileId(userId, {
      skip: Number(skip),
      take: Number(take),
    });
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSaleDto: UpdateBodySalesDadaDto,
  ) {
    return this.salesService.update(id, updateSaleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.salesService.remove(id);
  }
}
