/*
  Warnings:

  - You are about to drop the column `residentialAddres` on the `form` table. All the data in the column will be lost.
  - Added the required column `residentialAddress` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `form` DROP COLUMN `residentialAddres`,
    ADD COLUMN `residentialAddress` VARCHAR(191) NOT NULL;
