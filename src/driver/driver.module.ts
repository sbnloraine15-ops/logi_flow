import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller.js';


@Module({
  controllers: [DriverController],
  providers: [],
})
export class DriverModule {}
