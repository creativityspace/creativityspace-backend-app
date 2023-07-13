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
exports.DeviseController = void 0;
const common_1 = require("@nestjs/common");
const devise_service_1 = require("./devise.service");
const create_devise_dto_1 = require("./dto/create-devise.dto");
const update_devise_dto_1 = require("./dto/update-devise.dto");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let DeviseController = exports.DeviseController = class DeviseController {
    constructor(deviseService) {
        this.deviseService = deviseService;
    }
    async create(createDeviseDto) {
        return this.deviseService.create(createDeviseDto);
    }
    async findAll() {
        return this.deviseService.findAll();
    }
    async findOne(id) {
        return this.deviseService.findOne(id);
    }
    async update(id, updateDeviseDto) {
        return this.deviseService.update(id, updateDeviseDto);
    }
    async remove(id) {
        return this.deviseService.remove(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_devise_dto_1.CreateDeviseDto]),
    __metadata("design:returntype", Promise)
], DeviseController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeviseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeviseController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_devise_dto_1.UpdateDeviseDto]),
    __metadata("design:returntype", Promise)
], DeviseController.prototype, "update", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeviseController.prototype, "remove", null);
exports.DeviseController = DeviseController = __decorate([
    (0, common_1.Controller)('devise'),
    __metadata("design:paramtypes", [devise_service_1.DeviseService])
], DeviseController);
//# sourceMappingURL=devise.controller.js.map