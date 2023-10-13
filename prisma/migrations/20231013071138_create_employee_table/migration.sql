-- CreateTable
CREATE TABLE `Employee` (
    `employeeId` INTEGER NOT NULL AUTO_INCREMENT,
    `employeeN` VARCHAR(191) NOT NULL,
    `employeeAge` VARCHAR(191) NOT NULL,
    `employeeDep` VARCHAR(191) NOT NULL,

    INDEX `Employee_employeeId_idx`(`employeeId`),
    PRIMARY KEY (`employeeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
