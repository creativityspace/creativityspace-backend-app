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
exports.FollowerController = void 0;
const common_1 = require("@nestjs/common");
const follower_service_1 = require("./follower.service");
const create_follower_dto_1 = require("./dto/create-follower.dto");
const update_follower_dto_1 = require("./dto/update-follower.dto");
let FollowerController = exports.FollowerController = class FollowerController {
    constructor(followerService) {
        this.followerService = followerService;
    }
    create(createFollowerDto) {
        return this.followerService.create(createFollowerDto);
    }
    findAll() {
        return this.followerService.findAll();
    }
    findOne(id) {
        return this.followerService.findOne(id);
    }
    update(id, updateFollowerDto) {
        return this.followerService.update(id, updateFollowerDto);
    }
    remove(id) {
        return this.followerService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_follower_dto_1.CreateFollowerDto]),
    __metadata("design:returntype", void 0)
], FollowerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FollowerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FollowerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_follower_dto_1.UpdateFollowerDto]),
    __metadata("design:returntype", void 0)
], FollowerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FollowerController.prototype, "remove", null);
exports.FollowerController = FollowerController = __decorate([
    (0, common_1.Controller)('follower'),
    __metadata("design:paramtypes", [follower_service_1.FollowerService])
], FollowerController);
//# sourceMappingURL=follower.controller.js.map