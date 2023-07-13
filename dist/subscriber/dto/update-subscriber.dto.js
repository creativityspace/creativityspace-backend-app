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
exports.UpdateBodySubscriberDadaDto = exports.UpdateSubscriberDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_subscriber_dto_1 = require("./create-subscriber.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateSubscriberDto extends (0, mapped_types_1.PartialType)(create_subscriber_dto_1.CreateSubscriberDto) {
}
exports.UpdateSubscriberDto = UpdateSubscriberDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", void 0)
], UpdateSubscriberDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", void 0)
], UpdateSubscriberDto.prototype, "collectionId", void 0);
class UpdateBodySubscriberDadaDto {
}
exports.UpdateBodySubscriberDadaDto = UpdateBodySubscriberDadaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: UpdateSubscriberDto }),
    __metadata("design:type", UpdateSubscriberDto)
], UpdateBodySubscriberDadaDto.prototype, "subscriber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: create_subscriber_dto_1.Price }),
    __metadata("design:type", create_subscriber_dto_1.Price)
], UpdateBodySubscriberDadaDto.prototype, "price", void 0);
//# sourceMappingURL=update-subscriber.dto.js.map