import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DeliveryModule } from './delivery/delivery.module.js';
import { DriverModule } from './driver/driver.module.js';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/infrastructure/auth.module.js';


@Module({
  imports: [DeliveryModule, DriverModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
