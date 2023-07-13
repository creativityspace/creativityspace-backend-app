import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDeviseDto } from './create-devise.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateDeviseDto extends PartialType(CreateDeviseDto) {
  @IsNotEmpty()
  @ApiProperty()
  code: string;
  @IsNotEmpty()
  @ApiProperty()
  label: string;
}
