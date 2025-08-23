/*
  Warnings:

  - You are about to drop the column `ownerEmail` on the `Tenant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Tenant_ownerEmail_key";

-- AlterTable
ALTER TABLE "public"."Tenant" DROP COLUMN "ownerEmail",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_userId_key" ON "public"."Tenant"("userId");
