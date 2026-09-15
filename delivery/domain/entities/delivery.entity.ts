import { Entity } from "../../../shared/domain/entites/entity.js"

export enum DeliveryStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled'
}



export type DeliveryProps = {
    status: DeliveryStatus
    createdAt: Date
    driveId: string
}

export class DeliveryEntiry extends Entity<DeliveryProps> {
    constructor(public readonly props: DeliveryProps, id?: string) {
        super(props, id)
        this.props.createdAt = this.props.createdAt ?? new Date()
    }



}