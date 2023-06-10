import { Role } from "@prisma/client";
export declare class CreateUserDto {
    email: string;
    name?: string;
    userName: string;
    userID: string;
    role: Role;
}
