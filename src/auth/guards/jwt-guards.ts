// src/auth/infrastructure/guards/jwt-auth.guard.ts
import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
    Inject
} from '@nestjs/common';
import { AuthService } from '../infrastructure/auth.service.js';


@Injectable()
export class OptionalJwtAuthGuard implements CanActivate {
    constructor(
        private readonly authService: AuthService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        console.log('>>>>')
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            throw new UnauthorizedException('Token de autenticação não fornecido.');
        }

        const token = authHeader.replace('Bearer ', '').trim();

        try {
            // Usa o seu método existente para verificar o token
            const payload = await this.authService.verifyJwt(token);

            if (!payload || !payload.driverId) {
                throw new UnauthorizedException('Token inválido.');
            }

            request.driverId = payload.driverId;
            return true;
        } catch (error) {
            throw new UnauthorizedException('Token inválido ou expirado.');
        }
    }
}