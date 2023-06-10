import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";

export class CreateUserDto {
    @ApiProperty()
    email: string;
  
    @ApiProperty({ required: false })
    name?: string;
  
    @ApiProperty()
    userName: string;
    
    @ApiProperty()
    userID: string;
    
    @ApiProperty()
    role: Role;
}
