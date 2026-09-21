import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DeliveryModule } from './delivery/delivery.module.js';
import { DriverModule } from './driver/driver.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DeliveryModule, DriverModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
