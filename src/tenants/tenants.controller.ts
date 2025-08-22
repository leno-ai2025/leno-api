// Fichier: src/tenants/tenants.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { TenantsService } from './tenants.service';

// Ceci définit la forme des données que l'on attend du frontend
class CreateTenantDto {
  companyName: string;
  ownerEmail: string;
}

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Post()
  create(@Body() createTenantDto: CreateTenantDto) {
    return this.tenantsService.create(createTenantDto);
  }
}