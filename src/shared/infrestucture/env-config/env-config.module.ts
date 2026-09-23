import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigServic } from './env-config.service.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV}`,
        '.env',
      ],

    }),
  ],
  providers: [EnvConfigServic],
  exports: [EnvConfigServic],
})
export class EnvConfigModule {
    getJwtSecret: any;
}