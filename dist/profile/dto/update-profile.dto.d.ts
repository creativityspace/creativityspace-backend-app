import { CreateProfileDto } from './create-profile.dto';
declare const UpdateProfileDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProfileDto>>;
export declare class UpdateProfileDto extends UpdateProfileDto_base {
    avatarUrl: string;
    bio: string;
}
export {};
