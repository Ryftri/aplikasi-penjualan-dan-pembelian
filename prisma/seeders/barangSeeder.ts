import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedBarang = async (users: { adminUser: any, karyawanUser: any }) => {
  const barangAdmin1 = await prisma.barang.create({
    data: {
      nama_barang: 'Barang Admin 1',
      jumlah_barang: 10,
      penginput: { connect: { id: users.adminUser.id } },
    },
  });

  const barangAdmin2 = await prisma.barang.create({
    data: {
      nama_barang: 'Barang Admin 2',
      jumlah_barang: 20,
      penginput: { connect: { id: users.adminUser.id } },
    },
  });

  const barangKaryawan1 = await prisma.barang.create({
    data: {
      nama_barang: 'Barang Karyawan 1',
      jumlah_barang: 15,
      penginput: { connect: { id: users.karyawanUser.id } },
    },
  });

  const barangKaryawan2 = await prisma.barang.create({
    data: {
      nama_barang: 'Barang Karyawan 2',
      jumlah_barang: 25,
      penginput: { connect: { id: users.karyawanUser.id } },
    },
  });

  return { barangAdmin1, barangAdmin2, barangKaryawan1, barangKaryawan2 };
};
