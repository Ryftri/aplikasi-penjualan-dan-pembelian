/*
  Warnings:

  - Added the required column `barangId` to the `BarangKeluar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barangId` to the `BarangMasuk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BarangKeluar" ADD COLUMN     "barangId" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "BarangMasuk" ADD COLUMN     "barangId" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "BarangKeluar" ADD CONSTRAINT "BarangKeluar_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "Barang"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangMasuk" ADD CONSTRAINT "BarangMasuk_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "Barang"("id") ON DELETE CASCADE ON UPDATE CASCADE;
