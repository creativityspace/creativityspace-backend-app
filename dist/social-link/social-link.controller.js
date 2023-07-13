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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLinkController = void 0;
const common_1 = require("@nestjs/common");
const social_link_service_1 = require("./social-link.service");
const create_social_link_dto_1 = require("./dto/create-social-link.dto");
const update_social_link_dto_1 = require("./dto/update-social-link.dto");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let SocialLinkController = exports.SocialLinkController = class SocialLinkController {
    constructor(socialLinkService) {
        this.socialLinkService = socialLinkService;
    }
    create(createSocialLinkDto) {
        return this.socialLinkService.create(createSocialLinkDto);
    }
    async createMany(createSocialLinkDto) {
        return this.socialLinkService.createMany(createSocialLinkDto);
    }
    async findAll() {
        return this.socialLinkService.findAll();
    }
    async findOne(id) {
        return this.socialLinkService.findOne(id);
    }
    async update(id, updateSocialLinkDto) {
        return this.socialLinkService.update(id, updateSocialLinkDto);
    }
    async remove(id) {
        return this.socialLinkService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_social_link_dto_1.CreateSocialLinkDto]),
    __metadata("design:returntype", void 0)
], SocialLinkController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('many'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SocialLinkController.prototype, "createMany", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SocialLinkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SocialLinkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_social_link_dto_1.UpdateSocialLinkDto]),
    __metadata("design:returntype", Promise)
], SocialLinkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SocialLinkController.prototype, "remove", null);
exports.SocialLinkController = SocialLinkController = __decorate([
    (0, common_1.Controller)('social-link'),
    __metadata("design:paramtypes", [social_link_service_1.SocialLinkService])
], SocialLinkController);
//# sourceMappingURL=social-link.controller.js.map