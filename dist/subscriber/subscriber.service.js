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
exports.SubscriberService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SubscriberService = exports.SubscriberService = class SubscriberService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSubscriberDto) {
        var pricedata = this.prisma.price.create({
            data: createSubscriberDto.price,
        });
        return this.prisma.subscriber.create({
            data: Object.assign(Object.assign({}, createSubscriberDto.subscriber), { status: true, priceId: (await pricedata).id }),
        });
    }
    async findAll() {
        return this.prisma.subscriber.findMany();
    }
    async findOne(id) {
        return this.prisma.subscriber.findUnique({ where: { id: id } });
    }
    async update(id, updateSubscriberDto) {
        var pricedata = this.prisma.price.create({
            data: updateSubscriberDto.price,
        });
        return this.prisma.subscriber.update({
            data: Object.assign(Object.assign({}, updateSubscriberDto.subscriber), { priceId: (await pricedata).id }),
            where: { id: id },
        });
    }
    async remove(id) {
        return this.prisma.subscriber.delete({ where: { id: id } });
    }
};
exports.SubscriberService = SubscriberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubscriberService);
//# sourceMappingURL=subscriber.service.js.map