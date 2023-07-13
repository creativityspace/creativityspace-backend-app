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
exports.UpdateBodyCollectionBada = exports.UpdateCollectionDto = exports.CreatePrice = exports.Price = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_collection_dto_1 = require("./create-collection.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class Price {
}
exports.Price = Price;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Price.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", void 0)
], Price.prototype, "curencyId", void 0);
class CreatePrice {
}
exports.CreatePrice = CreatePrice;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Price }),
    __metadata("design:type", Price)
], CreatePrice.prototype, "create", void 0);
class UpdateCollectionDto extends (0, mapped_types_1.PartialType)(create_collection_dto_1.CreateCollectionDto) {
}
exports.UpdateCollectionDto = UpdateCollectionDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateCollectionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdateCollectionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdateCollectionDto.prototype, "bennerUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdateCollectionDto.prototype, "isFree", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", void 0)
], UpdateCollectionDto.prototype, "profileId", void 0);
class UpdateBodyCollectionBada {
}
exports.UpdateBodyCollectionBada = UpdateBodyCollectionBada;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: create_collection_dto_1.CreateCollectionDto }),
    __metadata("design:type", create_collection_dto_1.CreateCollectionDto)
], UpdateBodyCollectionBada.prototype, "colection", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: Price }),
    __metadata("design:type", Price)
], UpdateBodyCollectionBada.prototype, "price", void 0);
//# sourceMappingURL=update-collection.dto.js.map