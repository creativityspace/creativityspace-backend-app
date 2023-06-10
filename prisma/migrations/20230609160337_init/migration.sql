-- AlterTable
ALTER TABLE "products" ADD COLUMN     "productCategoriesId" UUID;

-- CreateTable
CREATE TABLE "ProductCategories" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductCategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_productCategoriesId_fkey" FOREIGN KEY ("productCategoriesId") REFERENCES "ProductCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
