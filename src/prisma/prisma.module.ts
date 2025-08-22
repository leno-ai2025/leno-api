// Fichier: src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Rend le module disponible globalement
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}