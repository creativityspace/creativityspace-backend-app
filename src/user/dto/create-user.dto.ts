import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  name?: string;

  @IsNotEmpty()
  @ApiProperty()
  userName: string;

  @IsNotEmpty()
  @ApiProperty()
  userID: string;

  @IsNotEmpty()
  @ApiProperty()
  role: Role;
}
