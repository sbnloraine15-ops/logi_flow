import { Module } from '@nestjs/common';
import { DeliveryController } from './infrestructure/delivery.controller.js';
import { CreateDelivery } from './aplication/usecase/singup-delivery.js';
import { DeliveryRepository } from './domain/repository/delivery-repository.js';
import { GetDelivery } from './aplication/usecase/get-delivery.js';
import { UpdateDelivery } from './aplication/usecase/AcceptDeliveryUseCase.js';
import { ListDelivery } from './aplication/usecase/list-delivery.js';
import { DeliveryDelete } from './aplication/usecase/delete-delivery.js';
import { DeliveryRepositoryInMemory } from './infrestructure/repository/delivery-repository-in-memory.js';




@Module({
  controllers: [DeliveryController],
  providers: [
    {
      provide: 'DeliveryRepository',
      useClass: DeliveryRepositoryInMemory,
    },
    {
      provide: CreateDelivery.DeliveryCreateUseCase,
      useFactory: (
        deliveryRepository: DeliveryRepository.Repository,
      ) => {
        return new CreateDelivery.DeliveryCreateUseCase(
          deliveryRepository,
        );
      },
      inject: ['DeliveryRepository'],
    },
    {
      provide: GetDelivery.GetDeliveryUseCase,
      useFactory: (
        deliveryRepository: DeliveryRepository.Repository
      ) => {
        return new GetDelivery.GetDeliveryUseCase(
          deliveryRepository,
        )
      },
      inject: ['DeliveryRepository']
    },
    {
      provide: DeliveryDelete.DeliveryDeleteUseCase,
      useFactory: (
        deliveryRepository: DeliveryRepository.Repository,
      ) => {
        return new DeliveryDelete.DeliveryDeleteUseCase(
          deliveryRepository,
        );
      },
      inject: ['DeliveryRepository'],
    },

    {
      provide: UpdateDelivery.UpdateDeliveryUseCase,
      useFactory: (
        deliveryRepository: DeliveryRepository.Repository,
      ) => {
        return new UpdateDelivery.UpdateDeliveryUseCase(
          deliveryRepository,
        );
      },
      inject: ['DeliveryRepository'],
    },

    {
      provide: ListDelivery.DeliveryListUseCase,
      useFactory: (
        deliveryRepository: DeliveryRepository.Repository,
      ) => {
        return new ListDelivery.DeliveryListUseCase(
          deliveryRepository,
        );
      },
      inject: ['DeliveryRepository'],
    },

  ],
})
export class DeliveryModule { }
