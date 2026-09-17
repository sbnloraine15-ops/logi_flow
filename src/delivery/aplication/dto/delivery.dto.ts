import { DeliveryEntity } from "../../domain/entities/delivery.entity.js"
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum.js"


export type DeliveryOutput = {
    id: string
    status: DeliveryStatus
    createdAt: Date
    driverId: string
} 

export class DeliveryOutputMapper {
    static toOutput(entity: DeliveryEntity): DeliveryOutput{
        return entity.toJSON()
    }
}