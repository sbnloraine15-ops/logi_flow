import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Inject, UseGuards } from '@nestjs/common';
import { CreateDelivery } from '../aplication/usecase/singup-delivery.js';
import { GetDelivery } from '../aplication/usecase/get-delivery.js';
import { DeliveryDelete } from '../aplication/usecase/delete-delivery.js';
import { UpdateDelivery } from '../aplication/usecase/AcceptDeliveryUseCase.js';
import { ListDelivery } from '../aplication/usecase/list-delivery.js';
import { UpdateDeliveryDto } from './dto/update-delivery.dto.js';
import { SingupDto } from './dto/singup.dto.js';
import { AuthService } from '../../auth/infrastructure/auth.service.js';
import { DecoratorDriver } from '../../auth/guards/decorator-jwt.js';
import { OptionalJwtAuthGuard } from '../../auth/guards/jwt-guards.js';



@Controller('delivery')
export class DeliveryController {
  
  @Inject(CreateDelivery.DeliveryCreateUseCase)
  private createDelivery: CreateDelivery.DeliveryCreateUseCase

  @Inject(GetDelivery.GetDeliveryUseCase)
  private getDelivery : GetDelivery.GetDeliveryUseCase

  @Inject(DeliveryDelete.DeliveryDeleteUseCase)
  private deleteDelivery : DeliveryDelete.DeliveryDeleteUseCase

  @Inject(UpdateDelivery.UpdateDeliveryUseCase)
  private updateDelivery : UpdateDelivery.UpdateDeliveryUseCase

  @Inject(ListDelivery.DeliveryListUseCase)
  private listDelivery : ListDelivery.DeliveryListUseCase

  @Inject()
  private authService : AuthService

  
  @UseGuards(OptionalJwtAuthGuard)
  @HttpCode(201)
  @Post()
  async create(@Body() createDeliveryDto: SingupDto, @DecoratorDriver() driverId?: string) {
    const output = await this.createDelivery.execute({
      ...createDeliveryDto, 
      driverId
    })
    return output
  }

  @Get()
  async findAll() {
    return await this.listDelivery.execute()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.getDelivery.execute({id})
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDeliveryDto: UpdateDeliveryDto){
    return await this.updateDelivery.execute({id, ...updateDeliveryDto})
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteDelivery.execute({id});
  }
}

//se tiver driver.id ele vai verificar 