// Fichier: src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; // <--- IMPORTEZ ICI
import { TenantsModule } from './tenants/tenants.module';

@Module({
  imports: [PrismaModule, TenantsModule], // <--- AJOUTEZ ICI
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}