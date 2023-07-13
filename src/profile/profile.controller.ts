import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CategoriesProfileDto } from './dto/categories-profile.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Public()
  @Post()
  async create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  async findAll() {
    return this.profileService.findAll();
  }
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update(id, updateProfileDto);
  }
  @Public()
  @Patch('categories/:id')
  async updateCategiries(
    @Param('id') id: string,
    @Body() updateProfileDto: CategoriesProfileDto[],
  ) {
    return this.profileService.updateCategory(id, updateProfileDto);
  }
  @Public()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
