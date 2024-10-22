-- CreateTable
CREATE TABLE `Film` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `nameZH` VARCHAR(255) NOT NULL,
    `nameTC` VARCHAR(255) NOT NULL,
    `poster` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `onScreenTime` DATETIME(3) NOT NULL,
    `IMDBId` BIGINT NOT NULL,
    `length` INTEGER NOT NULL,
    `director` VARCHAR(255) NOT NULL,
    `mainCast` VARCHAR(255) NOT NULL,
    `subtitles` ENUM('CHINESE', 'ENGLISH') NOT NULL,
    `is3D` BOOLEAN NOT NULL,
    `rating` ENUM('LEVEL_ONE', 'LEVEL_TWO', 'LEVEL_TWO_A', 'LEVEL_TWO_B', 'LEVEL_THREE') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;