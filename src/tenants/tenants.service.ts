// Fichier: src/tenants/tenants.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: { companyName: string }) {
    return this.prisma.tenant.create({
      data: {
        companyName: data.companyName,
        userId: userId, // On enregistre l'ID de l'utilisateur
      },
    });
  }
}