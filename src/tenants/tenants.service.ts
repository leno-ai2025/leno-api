// Fichier: src/tenants/tenants.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private prisma: PrismaService) {}

  // Crée un nouveau tenant (client) dans la base de données
  create(data: { companyName: string; ownerEmail: string }) {
    return this.prisma.tenant.create({
      data,
    });
  }
}