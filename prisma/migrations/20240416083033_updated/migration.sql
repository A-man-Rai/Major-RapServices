/*
  Warnings:

  - You are about to drop the column `fromId` on the `documents` table. All the data in the column will be lost.
  - Added the required column `formId` to the `Documents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `documents` DROP FOREIGN KEY `Documents_fromId_fkey`;

-- AlterTable
ALTER TABLE `documents` DROP COLUMN `fromId`,
    ADD COLUMN `formId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Documents` ADD CONSTRAINT `Documents_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `Form`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
