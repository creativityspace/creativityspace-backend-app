"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const profile_module_1 = require("./profile/profile.module");
const social_link_module_1 = require("./social-link/social-link.module");
const follower_module_1 = require("./follower/follower.module");
const collection_module_1 = require("./collection/collection.module");
const subscriber_module_1 = require("./subscriber/subscriber.module");
const post_module_1 = require("./post/post.module");
const comment_module_1 = require("./comment/comment.module");
const category_module_1 = require("./category/category.module");
const prisma_service_1 = require("./prisma/prisma.service");
const products_module_1 = require("./products/products.module");
const sales_module_1 = require("./sales/sales.module");
const ratings_module_1 = require("./ratings/ratings.module");
const product_categories_module_1 = require("./product-categories/product-categories.module");
const auth_module_1 = require("./auth/auth.module");
const stripe_service_1 = require("./stripe/stripe.service");
const stripe_module_1 = require("./stripe/stripe.module");
const devise_module_1 = require("./devise/devise.module");
const language_module_1 = require("./language/language.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            profile_module_1.ProfileModule,
            social_link_module_1.SocialLinkModule,
            follower_module_1.FollowerModule,
            collection_module_1.CollectionModule,
            subscriber_module_1.SubscriberModule,
            post_module_1.PostModule,
            comment_module_1.CommentModule,
            category_module_1.CategoryModule,
            products_module_1.ProductsModule,
            sales_module_1.SalesModule,
            ratings_module_1.RatingsModule,
            product_categories_module_1.ProductCategoriesModule,
            stripe_module_1.StripeModule,
            devise_module_1.DeviseModule,
            language_module_1.LanguageModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, stripe_service_1.StripeService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map