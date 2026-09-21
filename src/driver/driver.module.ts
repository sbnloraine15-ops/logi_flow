import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller.js';
import { DriverRepositoryInMemory } from './infrastructure/repository/driver-repository-in-memory.js';
import { CreateDrive } from './aplication/usecases/create-drive.js';
import { DriverRepository } from './domain/repository/driver-repository.js';
import { HashProvider } from '../shared/aplication/providers/hash-provider.js';
import { Bcryptjs } from './infrastructure/hash-provaider/bycryptyjs.js';
import { GetDriver } from './aplication/usecases/get-drive.js';
import { UpdateDriver } from './aplication/usecases/update-drive.js';
import { DeleteDriver } from './aplication/usecases/delete-drive.js';


@Module({
  controllers: [DriverController],
  providers: [
    {
      provide: 'DriverRepository',
      useClass: DriverRepositoryInMemory
    },
    {
      provide: 'HashProvider',
      useClass: Bcryptjs,
    },
    {
      provide: CreateDrive.CreateDriveUseCase,
      useFactory: (
        deliveryRepository: DriverRepository.Repository,
        hashProvaider: HashProvider
      ) => {
        return new CreateDrive.CreateDriveUseCase(
          deliveryRepository, hashProvaider
        );
      },
      inject: ['DeliveryRepository', 'HashProvider']
    },

    {
      provide: CreateDrive.CreateDriveUseCase,
      useFactory: (
        driverRepository: DriverRepository.Repository,
        hashProvaider: HashProvider
      ) => {
        return new CreateDrive.CreateDriveUseCase(
          driverRepository,
          hashProvaider
        )
      },
      inject: ['DriverRepository', 'HashProvider'],
    },
    {
      provide: GetDriver.GetDriverUseCase,
      useFactory: (driverRepository: DriverRepository.Repository) => {
        return new GetDriver.GetDriverUseCase(driverRepository)
      },
      inject: ['DriverRepository'],
    },
    {
      provide: UpdateDriver.UpdateDriverUseCase,
      useFactory: (
        driverRepository: DriverRepository.Repository,
        hashProvaider: HashProvider
      ) => {
        return new UpdateDriver.UpdateDriverUseCase(
          driverRepository
        )
      },
      inject: ['DriverRepository'],
    },

    // Delete
    {
      provide: DeleteDriver.DeleteDriverUseCase,
      useFactory: (driverRepository: DriverRepository.Repository) => {
        return new DeleteDriver.DeleteDriverUseCase(driverRepository)
      },
      inject: ['DriverRepository'],
    },
  ],
})
export class DriverModule { }
