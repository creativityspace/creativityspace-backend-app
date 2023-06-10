/*
  Warnings:

  - Made the column `productCategoriesId` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_productCategoriesId_fkey";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "productCategoriesId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_productCategoriesId_fkey" FOREIGN KEY ("productCategoriesId") REFERENCES "ProductCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
