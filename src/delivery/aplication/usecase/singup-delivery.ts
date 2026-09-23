import { UseCase } from "../../../shared/aplication/usecase/use-case.js";
import { RepositoryInterface } from "../../../shared/domain/repositories/repository-contracts.js";
import { DeliveryEntity } from "../../domain/entities/delivery.entity.js";
import { DeliveryStatus } from "../../domain/enum/elivery-status.enum.js";

export namespace CreateDelivery {
    export type Input = {
        driverId?: string;
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
                status: DeliveryStatus.PENDING,
                driverId: input.driverId ?? null,
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