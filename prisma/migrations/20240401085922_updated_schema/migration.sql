/*
  Warnings:

  - You are about to drop the `from` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `from`;

-- CreateTable
CREATE TABLE `Form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `dob` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `occupation` VARCHAR(191) NOT NULL,
    `passportNo` VARCHAR(191) NOT NULL,
    `passportDateOfIssue` VARCHAR(191) NOT NULL,
    `passportValidUpto` VARCHAR(191) NOT NULL,
    `ilpNo` VARCHAR(191) NOT NULL,
    `visaNo` VARCHAR(191) NOT NULL,
    `visaIssue` VARCHAR(191) NOT NULL,
    `visaValidUpto` VARCHAR(191) NOT NULL,
    `residentialAddres` VARCHAR(191) NOT NULL,
    `dateOfVisit` VARCHAR(191) NOT NULL,
    `durationOfStay` VARCHAR(191) NOT NULL,
    `travelArrangementBy` VARCHAR(191) NOT NULL,
    `returned` VARCHAR(191) NOT NULL DEFAULT 'NO',
    `remarks` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
