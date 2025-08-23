// Fichier: src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [JwtStrategy],
  exports: [JwtStrategy, PassportModule], // On exporte pour que d'autres modules puissent les utiliser
})
export class AuthModule {}