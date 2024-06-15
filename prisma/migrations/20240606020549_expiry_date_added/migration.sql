/*
  Warnings:

  - You are about to drop the column `Rejected` on the `records` table. All the data in the column will be lost.
  - Added the required column `rejected` to the `Records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `form` ADD COLUMN `expiry` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `records` DROP COLUMN `Rejected`,
    ADD COLUMN `rejected` INTEGER NOT NULL;
