import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeviseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  code: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  label: string;
}
