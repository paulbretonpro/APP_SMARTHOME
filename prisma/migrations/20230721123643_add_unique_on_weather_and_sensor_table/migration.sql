/*
  Warnings:

  - You are about to drop the column `datetime` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `datetime` on the `Weather` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[time]` on the table `Sensor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[time]` on the table `Weather` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "datetime",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Weather" DROP COLUMN "datetime",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Sensor_time_key" ON "Sensor"("time");

-- CreateIndex
CREATE UNIQUE INDEX "Weather_time_key" ON "Weather"("time");
