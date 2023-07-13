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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostService = exports.PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPostDto) {
        return this.prisma.post.create({ data: createPostDto });
    }
    async findAll(userId, params) {
        const { skip, take } = params;
        if (isNaN(skip)) {
            return this.prisma.post.findMany({
                skip: skip,
                where: {
                    published: true,
                    collection: {
                        isFree: true,
                    },
                },
                orderBy: { createdAt: 'desc' },
                include: {
                    collection: {
                        select: {
                            Profile: { select: { user: true, avatarUrl: true, id: true } },
                        },
                    },
                    comments: { include: { user: true } },
                },
            });
        }
        else {
            return this.prisma.post.findMany({
                skip: skip,
                take: take,
                where: {
                    published: true,
                    collection: {
                        isFree: true,
                    },
                },
                orderBy: { createdAt: 'desc' },
                include: {
                    collection: {
                        select: {
                            Profile: { select: { user: true, avatarUrl: true, id: true } },
                        },
                    },
                    comments: { include: { user: true } },
                },
            });
        }
    }
    async findAllByCollectionId(id, params) {
        const { skip, take } = params;
        if (isNaN(skip)) {
            return this.prisma.post.findMany({
                skip: skip,
                orderBy: { createdAt: 'desc' },
                where: { collectionId: id },
            });
        }
        else {
            return this.prisma.post.findMany({
                skip: skip,
                take: take,
                orderBy: { createdAt: 'desc' },
                where: { collectionId: id },
            });
        }
    }
    async findAllByProfileId(id, params) {
        const { skip, take } = params;
        if (isNaN(skip)) {
            return this.prisma.post.findMany({
                skip: skip,
                orderBy: { createdAt: 'desc' },
                where: { collection: { profileId: id } },
            });
        }
        else {
            return this.prisma.post.findMany({
                skip: skip,
                take: take,
                orderBy: { createdAt: 'desc' },
                where: { collection: { profileId: id } },
            });
        }
    }
    async findOne(id) {
        return this.prisma.post.findUnique({ where: { id: id } });
    }
    async update(id, updatePostDto) {
        return this.prisma.post.update({ data: updatePostDto, where: { id: id } });
    }
    async remove(id) {
        return this.prisma.post.delete({ where: { id: id } });
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
//# sourceMappingURL=post.service.js.map