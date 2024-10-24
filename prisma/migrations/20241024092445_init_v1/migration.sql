-- CreateTable
CREATE TABLE "Barang" (
    "id" BIGSERIAL NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "jumlah_barang" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "penginputId" BIGINT NOT NULL,

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BarangKeluar" (
    "id" BIGSERIAL NOT NULL,
    "jumlah_barang_keluar" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "penginputId" BIGINT NOT NULL,

    CONSTRAINT "BarangKeluar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BarangMasuk" (
    "id" BIGSERIAL NOT NULL,
    "jumlah_barang_masuk" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "penginputId" BIGINT NOT NULL,

    CONSTRAINT "BarangMasuk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" BIGSERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "nama_lengkap" TEXT NOT NULL,
    "email" TEXT,
    "username" TEXT NOT NULL,
    "roleId" BIGINT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "User_nama_lengkap_email_username_id_idx" ON "User"("nama_lengkap", "email", "username", "id");

-- AddForeignKey
ALTER TABLE "Barang" ADD CONSTRAINT "Barang_penginputId_fkey" FOREIGN KEY ("penginputId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangKeluar" ADD CONSTRAINT "BarangKeluar_penginputId_fkey" FOREIGN KEY ("penginputId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangMasuk" ADD CONSTRAINT "BarangMasuk_penginputId_fkey" FOREIGN KEY ("penginputId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
