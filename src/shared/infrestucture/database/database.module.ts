import { DynamicModule, Global, Module } from '@nestjs/common'
import { PrismaClient } from '@prisma/client/extension'

import { ConfigService } from '@nestjs/config'
import { EnvConfigModule } from '../env-config/env-config.module.js'
import { PrismaService } from './prima-service.js'


@Global()
@Module({
  imports: [EnvConfigModule],
  providers: [ConfigService, PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {
  static forTest(prismaClient: PrismaClient): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: PrismaService,
          useFactory: () => prismaClient as PrismaService,
        },
      ],
    }
  }
}
