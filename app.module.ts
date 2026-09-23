import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DeliveryModule } from './delivery/delivery.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [DeliveryModule, DriverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
