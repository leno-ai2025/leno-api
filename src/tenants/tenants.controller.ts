import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { AuthGuard } from '@nestjs/passport';

class CreateTenantDto {
  companyName: string; 
}

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Request() req, @Body() createTenantDto: CreateTenantDto) {
    const userId = req.user.userId;
    // On passe bien le userId et le DTO
    return this.tenantsService.create(userId, createTenantDto);
  }
}