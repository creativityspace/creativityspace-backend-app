import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeviseService } from './devise.service';
import { CreateDeviseDto } from './dto/create-devise.dto';
import { UpdateDeviseDto } from './dto/update-devise.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('devise')
export class DeviseController {
  constructor(private readonly deviseService: DeviseService) {}
  @Public()
  @Post()
  async create(@Body() createDeviseDto: CreateDeviseDto) {
    return this.deviseService.create(createDeviseDto);
  }
  @Public()
  @Get()
  async findAll() {
    return this.deviseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.deviseService.findOne(id);
  }
  @Public()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDeviseDto: UpdateDeviseDto,
  ) {
    return this.deviseService.update(id, updateDeviseDto);
  }
  @Public()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.deviseService.remove(id);
  }
}
