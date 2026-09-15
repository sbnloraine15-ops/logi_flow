import { Entity } from "../../../shared/domain/entites/entity.js"

export type DeliveryProps = {
    pending: boolean
    in_progress: boolean
    delivered: boolean
    cancelled: boolean
    createdAt: Date
    driveId: string
}

export class DeliveryEntiry extends Entity<DeliveryProps> {
    constructor(public readonly props: DeliveryProps, id?: string){
        super(props, id)
        this.props.createdAt = this.props.createdAt ?? new Date()
    }



}