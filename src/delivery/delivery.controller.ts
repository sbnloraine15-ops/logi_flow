import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Inject } from '@nestjs/common';
import { CreateDelivery } from './aplication/usecase/singup-delivery.js';
import { GetDelivery } from './aplication/usecase/get-delivery.js';
import { DeliveryDelete } from './aplication/usecase/delete-delivery.js';
import { UpdateDelivery } from './aplication/usecase/update-delivery.js';
import { ListDelivery } from './aplication/usecase/list-delivery.js';
import { CreateDeliveryDto } from './dto/create-delivery.dto.js';


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

  @HttpCode(200)
  @Post('create')
  create(@Body() createDelivery: CreateDeliveryDto) {
    return this.deliveryService.create(CreateDelivery);
  }

  @Get()
  findAll() {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryDto: UpdateDeliveryDto) {
    return this.deliveryService.update(+id, updateDeliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryService.remove(+id);
  }
}
