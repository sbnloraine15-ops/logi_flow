import { HttpException, HttpStatus } from "@nestjs/common"
import { UseCase } from "../../../shared/aplication/usecase/use-case.js"
import { DeliveryStatus } from "../../domain/enum/elivery-status.enum.js"
import { DeliveryRepository } from "../../domain/repository/delivery-repository.js"
import { DeliveryOutput, DeliveryOutputMapper } from "../dto/delivery.dto.js"

export namespace UpdateDelivery {
    export type Input = {
        id: string
        driverId: string
    }

    export type Output = DeliveryOutput


    export class UpdateDeliveryUseCase implements UseCase<Input, Output> {

        constructor(private deliveryRepository: DeliveryRepository.Repository) { }

        async execute(input: Input): Promise<Output> {
            const delivery = await this.deliveryRepository.findById(input.id)
            if (!delivery) {
                throw new HttpException('Delivery não encontrado', HttpStatus.BAD_REQUEST)
            }
            delivery.startDelivery(input.driverId)
            await this.deliveryRepository.update(delivery)

            return DeliveryOutputMapper.toOutput(delivery)

        }


    }
}