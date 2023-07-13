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
exports.SubscriberController = void 0;
const common_1 = require("@nestjs/common");
const subscriber_service_1 = require("./subscriber.service");
const create_subscriber_dto_1 = require("./dto/create-subscriber.dto");
const update_subscriber_dto_1 = require("./dto/update-subscriber.dto");
let SubscriberController = exports.SubscriberController = class SubscriberController {
    constructor(subscriberService) {
        this.subscriberService = subscriberService;
    }
    async create(createSubscriberDto) {
        return this.subscriberService.create(createSubscriberDto);
    }
    async findAll() {
        return this.subscriberService.findAll();
    }
    async findOne(id) {
        return this.subscriberService.findOne(id);
    }
    async update(id, updateSubscriberDto) {
        return this.subscriberService.update(id, updateSubscriberDto);
    }
    async remove(id) {
        return this.subscriberService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subscriber_dto_1.BodySubscriberDadaDto]),
    __metadata("design:returntype", Promise)
], SubscriberController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriberController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriberController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subscriber_dto_1.UpdateBodySubscriberDadaDto]),
    __metadata("design:returntype", Promise)
], SubscriberController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriberController.prototype, "remove", null);
exports.SubscriberController = SubscriberController = __decorate([
    (0, common_1.Controller)('subscriber'),
    __metadata("design:paramtypes", [subscriber_service_1.SubscriberService])
], SubscriberController);
//# sourceMappingURL=subscriber.controller.js.map