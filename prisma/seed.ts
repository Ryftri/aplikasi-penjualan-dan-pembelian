import { PrismaClient } from '@prisma/client';
import { seedRoles } from './seeders/roleSeeder';
import { seedUsers } from './seeders/userSeeder';
import { seedBarang } from './seeders/barangSeeder';
import { seedBarangMasuk } from './seeders/barangMasukSeeder';
import { seedBarangKeluar } from './seeders/barangKeluarSeeder';

const prisma = new PrismaClient();

async function main() {
  // Seed roles
  const roles = await seedRoles();

  // Seed users with roles
  const users = await seedUsers(roles);

  // Seed barang inputan
  const barang = await seedBarang(users);

  // Seed barang masuk
  await seedBarangMasuk(barang, users);

  // Seed barang keluar
  await seedBarangKeluar(barang, users);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
