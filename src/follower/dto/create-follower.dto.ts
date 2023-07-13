import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFollowerDto {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  userId: never;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  profileId: never;
}
