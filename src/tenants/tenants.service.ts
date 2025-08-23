import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: { companyName: string }) {
    // Assurez-vous que vous utilisez bien 'userId' et non 'ownerEmail'
    return this.prisma.tenant.create({
      data: {
        companyName: data.companyName,
        userId: userId,
      },
    });
  }
}