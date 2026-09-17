import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Inject } from '@nestjs/common';
import { CreateDelivery } from '../aplication/usecase/singup-delivery.js';
import { GetDelivery } from '../aplication/usecase/get-delivery.js';
import { DeliveryDelete } from '../aplication/usecase/delete-delivery.js';
import { UpdateDelivery } from '../aplication/usecase/AcceptDeliveryUseCase.js';
import { ListDelivery } from '../aplication/usecase/list-delivery.js';
import { UpdateDeliveryDto } from './dto/update-delivery.dto.js';
import { SingupDto } from './dto/singup.dto.js';



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

  

  @HttpCode(201)
  @Post()
  async create(@Body() createDeliveryDto: SingupDto) {
    return await this.createDelivery.execute(createDeliveryDto)
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
