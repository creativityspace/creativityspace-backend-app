-- DropForeignKey
ALTER TABLE "followers" DROP CONSTRAINT "followers_userId_fkey";

-- AlterTable
ALTER TABLE "followers" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
