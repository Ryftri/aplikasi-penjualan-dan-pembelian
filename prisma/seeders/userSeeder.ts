import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

export const seedUsers = async (roles: { adminRole: any, karyawanRole: any }) => {
  const hashedPasswordAdmin = await argon2.hash('admin12345');
  const hashedPasswordKaryawan = await argon2.hash('karyawan12345');

  const adminUser = await prisma.user.create({
    data: {
      nama_lengkap: 'Admin User',
      email: 'admin@example.com',
      username: 'admin',
      password: hashedPasswordAdmin,
      isActive: true,
      role: { connect: { id: roles.adminRole.id } },
    },
  });

  const karyawanUser = await prisma.user.create({
    data: {
      nama_lengkap: 'Karyawan User',
      email: 'karyawan@example.com',
      username: 'karyawan',
      password: hashedPasswordKaryawan,
      isActive: true,
      role: { connect: { id: roles.karyawanRole.id } },
    },
  });

  return { adminUser, karyawanUser };
};
