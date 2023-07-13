/*
  Warnings:

  - Made the column `profileId` on table `collections` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "collections" DROP CONSTRAINT "collections_profileId_fkey";

-- AlterTable
ALTER TABLE "collections" ALTER COLUMN "profileId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "collections" ADD CONSTRAINT "collections_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
