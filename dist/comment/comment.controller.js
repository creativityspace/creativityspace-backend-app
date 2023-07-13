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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const update_comment_dto_1 = require("./dto/update-comment.dto");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let CommentController = exports.CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async createForPost(createCommentDto) {
        return this.commentService.createForPost(createCommentDto);
    }
    async createForProduct(createCommentDto) {
        return this.commentService.createForProduct(createCommentDto);
    }
    async findAll() {
        return this.commentService.findAll();
    }
    async findAllByPostId(id) {
        return this.commentService.findAllByPostId(id);
    }
    async findAllByProductId(id) {
        return this.commentService.findAllByProductId(id);
    }
    async findOne(id) {
        return this.commentService.findOne(id);
    }
    async updateForPost(id, updateCommentDto) {
        return this.commentService.updateForPost(id, updateCommentDto);
    }
    async updateForProduct(id, updateCommentDto) {
        return this.commentService.updateForProduct(id, updateCommentDto);
    }
    async remove(id) {
        return this.commentService.remove(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentForPostDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createForPost", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/product'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentForProductDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createForProduct", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('post/:postId'),
    __param(0, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findAllByPostId", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('product/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findAllByProductId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comment_dto_1.UpdateCommentForPostDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "updateForPost", null);
__decorate([
    (0, common_1.Patch)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comment_dto_1.UpdateCommentForProductDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "updateForProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "remove", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map