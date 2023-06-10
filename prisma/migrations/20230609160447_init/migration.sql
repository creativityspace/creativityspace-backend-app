/*
  Warnings:

  - You are about to drop the column `productCategoriesId` on the `products` table. All the data in the column will be lost.
  - Added the required column `productCategoryId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_productCategoriesId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "productCategoriesId",
ADD COLUMN     "productCategoryId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
