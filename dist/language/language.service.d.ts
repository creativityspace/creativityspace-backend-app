import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
export declare class LanguageService {
    create(createLanguageDto: CreateLanguageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLanguageDto: UpdateLanguageDto): string;
    remove(id: number): string;
}
