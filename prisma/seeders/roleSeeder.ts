import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedRoles = async () => {
  const adminRole = await prisma.role.upsert({
    where: { 
        id: 1,
        role: 'admin' 
    },
    update: {},
    create: {
      role: 'admin',
    },
  });

  const karyawanRole = await prisma.role.upsert({
    where: { 
        id: 2,
        role: 'karyawan' 
    },
    update: {},
    create: {
      role: 'karyawan',
    },
  });

  return { adminRole, karyawanRole };
};
