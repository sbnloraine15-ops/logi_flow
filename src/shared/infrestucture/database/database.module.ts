import { DynamicModule, Global, Module } from '@nestjs/common'
import { PrismasService } from '../../../prismas/prismas.service.js'
import { PrismaClient } from '@prisma/client/extension'

import { ConfigService } from '@nestjs/config'
import { EnvConfigModule } from '../env-config/env-config.module.js'


@Global()
@Module({
  imports: [EnvConfigModule],
  providers: [ConfigService, PrismasService],
  exports: [PrismasService],
})
export class DatabaseModule {
  static forTest(prismaClient: PrismaClient): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: PrismasService,
          useFactory: () => prismaClient as PrismasService,
        },
      ],
    }
  }
}
