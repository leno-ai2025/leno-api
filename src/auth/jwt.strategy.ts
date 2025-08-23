// Fichier: src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    // 1. On récupère la clé secrète
    const secret = configService.get<string>('SUPABASE_JWT_SECRET');

    // 2. On vérifie si elle existe. Si non, on arrête tout.
    if (!secret) {
      throw new Error('JWT Secret not found in environment variables');
    }

    // 3. Si on arrive ici, TypeScript sait que 'secret' est un 'string'.
    //    Il n'y a plus d'erreur.
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}