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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Public()
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Public()
  @Get('creators')
  findAllCreator() {
    return this.userService.findAllCreator();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Get('suggestions/:userid')
  findSugestionUsers(@Param('userid') id: string, @Query('skip') skip: string,
  @Query('take') take: string,) {
    return this.userService.findSugestionUsers(id, {
      skip: Number(skip),
      take: Number(take),
    });
  }     
  @Public()
  @Get('/userID/:id')
  findOneByuserID(@Param('id') id: string) {
    return this.userService.findOneByUserID(id);
  }
  @Public()
  @Get('/userName/:id')
  findOneByuserName(@Param('id') id: string) {
    return this.userService.findOneByUserName(id);
  }
  @Public()
  @Get('/checkUserName/:id')
  checkUserName(@Param('id') id: string) {
    return this.userService.checkUserName(id);
  }
  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
