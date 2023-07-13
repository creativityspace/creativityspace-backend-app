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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = exports.ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        var pricedata = await this.prisma.price.create({
            data: createProductDto.price,
        });
        console.log(pricedata);
        return this.prisma.products.create({
            data: Object.assign(Object.assign({}, createProductDto.product), { priceId: (await pricedata).id }),
        });
    }
    async findAll(params) {
        const { skip, take } = params;
        if (isNaN(skip)) {
            return this.prisma.products.findMany({
                skip: skip,
                orderBy: { createdAt: 'desc' },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
        else {
            return this.prisma.products.findMany({
                skip: skip,
                take: take,
                orderBy: { createdAt: 'desc' },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
    }
    async searchAll(params) {
        const { skip, take, searchBody } = params;
        if (isNaN(skip)) {
            return this.prisma.products.findMany({
                where: {
                    description: { search: searchBody },
                    name: { search: searchBody },
                    ProductCategory: { name: { search: searchBody } },
                },
                skip: skip,
                orderBy: { createdAt: 'desc' },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
        else {
            return this.prisma.products.findMany({
                where: {
                    description: { search: searchBody },
                    name: { search: searchBody },
                    ProductCategory: { name: { search: searchBody } },
                },
                skip: skip,
                take: take,
                orderBy: { createdAt: 'desc' },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
    }
    async findAllByProfileId(profileId, params) {
        const { skip, take } = params;
        if (isNaN(skip)) {
            return this.prisma.products.findMany({
                skip: skip,
                orderBy: { createdAt: 'desc' },
                where: { profileId: profileId },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
        else {
            return this.prisma.products.findMany({
                skip: skip,
                take: take,
                orderBy: { createdAt: 'desc' },
                where: { profileId: profileId },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
    }
    async SearchAllByProfileId(profileId, params) {
        const { skip, take, searchBody } = params;
        if (isNaN(skip)) {
            return this.prisma.products.findMany({
                skip: skip,
                orderBy: { createdAt: 'desc' },
                where: {
                    profileId: profileId,
                    description: { search: searchBody },
                    name: { search: searchBody },
                    ProductCategory: { name: { search: searchBody } },
                },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
        else {
            return this.prisma.products.findMany({
                skip: skip,
                take: take,
                orderBy: { createdAt: 'desc' },
                where: {
                    profileId: profileId,
                    description: { search: searchBody },
                    name: { search: searchBody },
                    ProductCategory: { name: { search: searchBody } },
                },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
    }
    async findAllByCategory(category, params) {
        const { skip, take } = params;
        if (isNaN(skip)) {
            return this.prisma.products.findMany({
                skip: skip,
                orderBy: { createdAt: 'desc' },
                where: { ProductCategory: { id: category } },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
        else {
            return this.prisma.products.findMany({
                skip: skip,
                take: take,
                orderBy: { createdAt: 'desc' },
                where: { ProductCategory: { id: category } },
                include: {
                    Profile: { include: { user: true } },
                    Ratings: true,
                    price: { include: { curency: true } },
                },
            });
        }
    }
    async findOne(id) {
        return this.prisma.products.findUnique({
            where: { id: id },
            include: {
                Profile: { include: { user: true } },
                Ratings: true,
                price: { include: { curency: true } },
            },
        });
    }
    async update(id, updateProductDto) {
        var pricedata = this.prisma.price.create({ data: updateProductDto.price });
        return this.prisma.products.update({
            data: Object.assign(Object.assign({}, updateProductDto.product), { priceId: (await pricedata).id }),
            where: { id: id },
            include: { price: { include: { curency: true } } },
        });
    }
    async remove(id) {
        return this.prisma.products.delete({ where: { id: id } });
    }
};
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map