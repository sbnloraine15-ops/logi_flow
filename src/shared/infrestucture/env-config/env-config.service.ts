import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { EnvConfig } from './env-config.interface.js'


@Injectable()
export class EnvConfigServic implements EnvConfig {
  constructor(private configService: ConfigService) { }

  getAppPort(): number {
    return Number(this.configService.get<number>('PORT'))
  }

  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV') ?? 'development'
  }

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET') ?? 'my_secret'
  }
  getJwtExpiresInSeconds(): number {
    return Number(this.configService.get<number>('JWT_EXPIRES_IN'))
  }
}