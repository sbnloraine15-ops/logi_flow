import { UseCase } from "../../../shared/aplication/usecase/use-case.js";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum.js";
import { DeliveryRepository } from "../../domain/repository/delivery-repository.js";


export namespace ListDelivery {
    export type Input = void //precisei pesquisar

    export type Output = {
        id: string
        status: DeliveryStatus
        createdAt: Date
        driverId: string
    }[] //precisei pesquisar

    export class DeliveryListUseCase implements UseCase<Input, Output> {
        constructor(private deliveryRepository: DeliveryRepository.Repository) { }

        async execute(input: void): Promise<Output> {
            const entity = await this.deliveryRepository.findAll()
            return entity.map((delivery) => ({
                id: delivery.id,
                status: delivery.props.status,
                driverId: delivery.props.driverId,
                createdAt: delivery.props.createdAt,
            })); // precisei de ajuda(gpt)
        }

    }
}