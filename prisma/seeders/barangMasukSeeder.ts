import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedBarangMasuk = async (barang: any, users: { adminUser: any, karyawanUser: any }) => {
  const barangMasukAdmin1 = await prisma.barangMasuk.create({
    data: {
      jumlah_barang_masuk: 5,
      penginput: { connect: { id: users.adminUser.id } },
      barang: { connect: { id: barang.barangAdmin1.id } },
    },
  });

  const barangMasukAdmin2 = await prisma.barangMasuk.create({
    data: {
      jumlah_barang_masuk: 8,
      penginput: { connect: { id: users.adminUser.id } },
      barang: { connect: { id: barang.barangAdmin2.id } },
    },
  });

  const barangMasukKaryawan1 = await prisma.barangMasuk.create({
    data: {
      jumlah_barang_masuk: 12,
      penginput: { connect: { id: users.karyawanUser.id } },
      barang: { connect: { id: barang.barangKaryawan1.id } },
    },
  });

  const barangMasukKaryawan2 = await prisma.barangMasuk.create({
    data: {
      jumlah_barang_masuk: 20,
      penginput: { connect: { id: users.karyawanUser.id } },
      barang: { connect: { id: barang.barangKaryawan2.id } },
    },
  });

  return { barangMasukAdmin1, barangMasukAdmin2, barangMasukKaryawan1, barangMasukKaryawan2 };
};
