import { CreateDeviseDto } from './create-devise.dto';
declare const UpdateDeviseDto_base: import("@nestjs/common").Type<Partial<CreateDeviseDto>>;
export declare class UpdateDeviseDto extends UpdateDeviseDto_base {
    code: string;
    label: string;
}
export {};
