"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SalesService = exports.SalesService = class SalesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSaleDto) {
        var pricedata = this.prisma.price.create({ data: createSaleDto.price });
        return this.prisma.sales.create({
            data: Object.assign(Object.assign({}, createSaleDto.sale), { priceId: (await pricedata).id }),
        });
    }
    async findAll() {
        return this.prisma.sales.findMany();
    }
    async findAllByUserId(userId, params) {
        const { skip, take } = params;
        if (isNaN(skip)) {
            return this.prisma.sales.findMany({
                skip,
                where: { userId: userId },
                include: { price: { include: { curency: true } }, Product: true },
                orderBy: { createdAt: 'desc' },
            });
        }
        else {
            return this.prisma.sales.findMany({
                skip,
                take,
                where: { userId: userId },
                include: { price: { include: { curency: true } }, Product: true },
                orderBy: { createdAt: 'desc' },
            });
        }
    }
    async findAllByProfileId(profileId, params) {
        const { skip, take } = params;
        if (isNaN(skip)) {
            return this.prisma.sales.findMany({
                skip,
                where: { Product: { profileId: profileId } },
                include: { price: { include: { curency: true } }, Product: true },
                orderBy: { createdAt: 'desc' },
            });
        }
        else {
            return this.prisma.sales.findMany({
                skip,
                take,
                where: { Product: { profileId: profileId } },
                include: { price: { include: { curency: true } }, Product: true },
                orderBy: { createdAt: 'desc' },
            });
        }
    }
    async findOne(id) {
        return this.prisma.sales.findUnique({ where: { id: id } });
    }
    async update(id, updateSaleDto) {
        var pricedata = this.prisma.price.create({ data: updateSaleDto.price });
        return this.prisma.sales.update({
            data: Object.assign(Object.assign({}, updateSaleDto.sale), { priceId: (await pricedata).id }),
            where: { id },
        });
    }
    async remove(id) {
        return this.prisma.sales.delete({ where: { id: id } });
    }
};
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalesService);
//# sourceMappingURL=sales.service.js.map