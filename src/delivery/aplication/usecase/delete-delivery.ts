import { HttpException, HttpStatus } from "@nestjs/common"
import { UseCase } from "../../../shared/aplication/usecase/use-case.js"
import { DeliveryRepository } from "../../domain/repository/delivery-repository.js"

export namespace DeliveryDelete{
    export type Input = {
        id: string 
    }

    export type Output = void 

    export class DeliveryDeleteUseCase implements UseCase<Input, Output>{

        constructor(private deliveryRepository : DeliveryRepository.Repository){}
        async execute(input: Input):Promise<void> {
            await this.deliveryRepository.findById(input.id)
            if(!input.id){
                throw new HttpException('Erro ao encontrar id', HttpStatus.BAD_REQUEST)
            }
            
            await this.deliveryRepository.delete(input.id)
             
        }
        
    }
}