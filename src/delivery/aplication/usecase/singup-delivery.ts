import { UseCase } from "../../../shared/aplication/usecase/use-case.js";
import { RepositoryInterface } from "../../../shared/domain/repositories/repository-contracts.js";
import { DeliveryEntity } from "../../domain/entities/delivery.entity.js";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum.js";

export namespace CreateDelivery {
    export type Input = {
        status: DeliveryStatus;
        driverId: string;
    }

    export type Output = {
        status: DeliveryStatus;
        id: string;
        driverId: string | null
    }

    export class DeliveryCreateUseCase implements UseCase<Input, Output> {
        constructor(private deliveryRepository: RepositoryInterface<DeliveryEntity>) {}

        async execute(input: Input): Promise<Output> {  
            const delivery = new DeliveryEntity({
                status: input.status,
                driverId: input.driverId, 
                createdAt: new Date()
            });

            await this.deliveryRepository.insert(delivery);

            return {
                id: delivery.id,
                status: delivery.props.status,
                driverId: delivery.props.driverId
            };
        }
    }
}