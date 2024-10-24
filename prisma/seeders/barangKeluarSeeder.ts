import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedBarangKeluar = async (barang: any, users: { adminUser: any, karyawanUser: any }) => {
  const barangKeluarAdmin1 = await prisma.barangKeluar.create({
    data: {
      jumlah_barang_keluar: 3,
      penginput: { connect: { id: users.adminUser.id } },
      barang: { connect: { id: barang.barangAdmin1.id } },
    },
  });

  const barangKeluarAdmin2 = await prisma.barangKeluar.create({
    data: {
      jumlah_barang_keluar: 7,
      penginput: { connect: { id: users.adminUser.id } },
      barang: { connect: { id: barang.barangAdmin2.id } },
    },
  });

  const barangKeluarKaryawan1 = await prisma.barangKeluar.create({
    data: {
      jumlah_barang_keluar: 10,
      penginput: { connect: { id: users.karyawanUser.id } },
      barang: { connect: { id: barang.barangKaryawan1.id } },
    },
  });

  const barangKeluarKaryawan2 = await prisma.barangKeluar.create({
    data: {
      jumlah_barang_keluar: 15,
      penginput: { connect: { id: users.karyawanUser.id } },
      barang: { connect: { id: barang.barangKaryawan2.id } },
    },
  });

  return { barangKeluarAdmin1, barangKeluarAdmin2, barangKeluarKaryawan1, barangKeluarKaryawan2 };
};
