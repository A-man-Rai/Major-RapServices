/*
  Warnings:

  - You are about to drop the column `userId` on the `documents` table. All the data in the column will be lost.
  - Added the required column `fromId` to the `Documents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `documents` DROP FOREIGN KEY `Documents_userId_fkey`;

-- AlterTable
ALTER TABLE `documents` DROP COLUMN `userId`,
    ADD COLUMN `fromId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Documents` ADD CONSTRAINT `Documents_fromId_fkey` FOREIGN KEY (`fromId`) REFERENCES `Form`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
