/*
  Warnings:

  - You are about to drop the column `authorId` on the `collections` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "collections" DROP CONSTRAINT "collections_authorId_fkey";

-- AlterTable
ALTER TABLE "collections" DROP COLUMN "authorId",
ADD COLUMN     "profileId" UUID;

-- AddForeignKey
ALTER TABLE "collections" ADD CONSTRAINT "collections_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
