/*
  Warnings:

  - You are about to drop the column `time` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Weather` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[datetime]` on the table `Sensor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[datetime]` on the table `Weather` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Sensor_time_key";

-- DropIndex
DROP INDEX "Weather_time_key";

-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "time",
ADD COLUMN     "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Weather" DROP COLUMN "time",
ADD COLUMN     "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Sensor_datetime_key" ON "Sensor"("datetime");

-- CreateIndex
CREATE UNIQUE INDEX "Weather_datetime_key" ON "Weather"("datetime");
