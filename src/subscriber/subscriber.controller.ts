import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import {
  BodySubscriberDadaDto,
  CreateSubscriberDto,
} from './dto/create-subscriber.dto';
import {
  UpdateBodySubscriberDadaDto,
  UpdateSubscriberDto,
} from './dto/update-subscriber.dto';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Post()
  async create(@Body() createSubscriberDto: BodySubscriberDadaDto) {
    return this.subscriberService.create(createSubscriberDto);
  }

  @Get()
  async findAll() {
    return this.subscriberService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.subscriberService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSubscriberDto: UpdateBodySubscriberDadaDto,
  ) {
    return this.subscriberService.update(id, updateSubscriberDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.subscriberService.remove(id);
  }
}
