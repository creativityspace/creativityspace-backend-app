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
exports.UpdateBodyProductDadaDto = exports.UpdateProductDto = exports.CreatePrice = exports.Price = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_product_dto_1 = require("./create-product.dto");
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
class UpdateProductDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "downloadProductUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "photos", void 0);
class UpdateBodyProductDadaDto {
}
exports.UpdateBodyProductDadaDto = UpdateBodyProductDadaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: UpdateProductDto }),
    __metadata("design:type", UpdateProductDto)
], UpdateBodyProductDadaDto.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: Price }),
    __metadata("design:type", Price)
], UpdateBodyProductDadaDto.prototype, "price", void 0);
//# sourceMappingURL=update-product.dto.js.map