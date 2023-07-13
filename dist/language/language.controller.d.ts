import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
export declare class LanguageController {
    private readonly languageService;
    constructor(languageService: LanguageService);
    create(createLanguageDto: CreateLanguageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLanguageDto: UpdateLanguageDto): string;
    remove(id: string): string;
}
