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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfileService = exports.ProfileService = class ProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProfileDto) {
        return this.prisma.profile.create({ data: createProfileDto });
    }
    async findAll() {
        return this.prisma.profile.findMany();
    }
    async findOne(id) {
        return this.prisma.profile.findUnique({ where: { id: id } });
    }
    async update(id, updateProfileDto) {
        return this.prisma.profile.update({
            data: updateProfileDto,
            where: { id: id },
        });
    }
    async updateCategory(id, updateCategoriesProfileDto) {
        return this.prisma.profile.update({
            where: { id: id },
            data: {
                categories: { connect: updateCategoriesProfileDto },
            },
            include: {
                categories: true,
            },
        });
    }
    async remove(id) {
        return this.prisma.profile.delete({ where: { id: id } });
    }
};
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map