import { Module } from '@nestjs/common';
import { DeliveryController } from './infrestructure/delivery.controller.js';
import { CreateDelivery } from './aplication/usecase/singup-delivery.js';



@Module({
  controllers: [DeliveryController],
  providers: [
    {
      provaide: ''
    }
  ],
})
export class DeliveryModule {}
