import { UseCase } from "../../../shared/aplication/usecase/use-case.js"
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum.js"
import { DeliveryRepository } from "../../domain/repository/delivery-repository.js"
import { DeliveryOutput, DeliveryOutputMapper } from "../dto/delivery.dto.js"


export namespace GetDelivery {
    export type Input = {
        id: string
    }

    export type Output = DeliveryOutput 
    


    export class GetDeliveryUseCase implements UseCase<Input, Output>{
       constructor(private deliveryRepository: DeliveryRepository.Repository){}
        async execute(input: Input): Promise<Output> {
            const entity = await this.deliveryRepository.findById(input.id)
            return DeliveryOutputMapper.toOutput(entity)

            
        }
        
    }
} 