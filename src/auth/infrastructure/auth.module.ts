import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { EnvConfigModule } from '../../shared/infrestucture/env-config/env-config.module.js';
import { JwtModule } from '@nestjs/jwt';
import { EnvConfigServic } from '../../shared/infrestucture/env-config/env-config.service.js';

@Module({
  imports:[EnvConfigModule, JwtModule.registerAsync({
    imports: [EnvConfigModule], 
    useFactory: async (configService: EnvConfigServic) => ({
      global: true, 
      secret: configService.getJwtSecret(), 
      signOptions: {expiresIn: configService.getJwtExpiresInSeconds()}, 
    }), 
    inject: [EnvConfigServic]
  }) ],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
