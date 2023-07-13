import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { SocialLinkModule } from './social-link/social-link.module';
import { FollowerModule } from './follower/follower.module';
import { CollectionModule } from './collection/collection.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { CategoryModule } from './category/category.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { RatingsModule } from './ratings/ratings.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { AuthModule } from './auth/auth.module';
import { StripeService } from './stripe/stripe.service';
import { StripeModule } from './stripe/stripe.module';
import { DeviseModule } from './devise/devise.module';
import { LanguageModule } from './language/language.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProfileModule,
    SocialLinkModule,
    FollowerModule,
    CollectionModule,
    SubscriberModule,
    PostModule,
    CommentModule,
    CategoryModule,
    ProductsModule,
    SalesModule,
    RatingsModule,
    ProductCategoriesModule,
    StripeModule,
    DeviseModule,
    LanguageModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, StripeService],
})
export class AppModule {}
