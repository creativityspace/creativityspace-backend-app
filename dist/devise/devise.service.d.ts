import { CreateDeviseDto } from './dto/create-devise.dto';
import { UpdateDeviseDto } from './dto/update-devise.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DeviseService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDeviseDto: CreateDeviseDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        code: string;
        label: string;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        code: string;
        label: string;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        code: string;
        label: string;
    }, unknown> & {}>;
    update(id: string, updateDeviseDto: UpdateDeviseDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        code: string;
        label: string;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        code: string;
        label: string;
    }, unknown> & {}>;
}
