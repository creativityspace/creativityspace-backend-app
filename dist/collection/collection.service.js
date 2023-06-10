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
exports.CollectionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CollectionService = exports.CollectionService = class CollectionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCollectionDto) {
        return this.prisma.collection.create({ data: createCollectionDto });
    }
    findAll() {
        return this.prisma.collection.findMany();
    }
    findAllByProfileId(id) {
        return this.prisma.collection.findMany({ where: { profileId: id } });
    }
    findAllByUserId(author) {
        return this.prisma.collection.findMany({ where: { Profile: { is: { userId: author } } } });
    }
    findOne(id) {
        return this.prisma.collection.findUnique({ where: { id: id } });
    }
    update(id, updateCollectionDto) {
        return this.prisma.collection.update({ data: updateCollectionDto, where: { id: id } });
    }
    remove(id) {
        return this.prisma.collection.delete({ where: { id: id } });
    }
};
exports.CollectionService = CollectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CollectionService);
//# sourceMappingURL=collection.service.js.map