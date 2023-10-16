/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `authorName` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Post_authorId_idx` ON `Post`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `authorId`,
    ADD COLUMN `authorName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Post_authorName_idx` ON `Post`(`authorName`);
