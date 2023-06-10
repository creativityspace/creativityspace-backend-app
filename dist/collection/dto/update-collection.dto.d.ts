import { CreateCollectionDto } from './create-collection.dto';
declare const UpdateCollectionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCollectionDto>>;
export declare class UpdateCollectionDto extends UpdateCollectionDto_base {
    title: string;
    description?: string;
    bennerUrl?: string;
    accessPrice: string;
    isFree: boolean;
    profileId: never;
}
export {};
