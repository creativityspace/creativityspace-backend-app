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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = exports.UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        return this.prisma.user.create({ data: createUserDto });
    }
    async findAll() {
        return this.prisma.user.findMany({ include: { profile: true } });
    }
    async findAllCreator() {
        return this.prisma.user.findMany({
            include: { profile: true },
            where: { role: 'CREATOR' },
        });
    }
    async findSugestionUsers(userid) {
        return this.prisma.user.findMany({
            include: { profile: true },
            where: {
                NOT: { id: { equals: userid } },
                AND: { NOT: { Followers: { some: { userId: userid } } } },
            },
        });
    }
    async findOne(id) {
        return this.prisma.user.findUnique({ where: { id: id } });
    }
    async findOneByUserName(id) {
        return this.prisma.user.findUnique({
            where: { userName: id },
            include: {
                profile: {
                    include: {
                        categories: true,
                        collections: {
                            where: { isFree: { equals: true } },
                            include: {
                                accessPrice: false,
                                posts: false,
                                Profile: false,
                                Subscribers: false,
                                _count: { select: { posts: true } },
                            },
                        },
                        _count: { select: { followers: true, Products: true } },
                    },
                },
            },
        });
    }
    async checkUserName(id) {
        return this.prisma.user.findUnique({
            where: { userName: id },
            select: { userName: true },
        });
    }
    async findOneByUserID(id) {
        return this.prisma.user.findUnique({
            where: { userID: id },
            include: {
                profile: true,
                _count: { select: { Subscribers: true } },
            },
        });
    }
    async update(id, updateUserDto) {
        return this.prisma.user.update({ data: updateUserDto, where: { id: id } });
    }
    async remove(id) {
        return this.prisma.user.delete({ where: { id: id } });
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map