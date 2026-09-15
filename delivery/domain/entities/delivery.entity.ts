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
    driverId: string
}

export class DeliveryEntity extends Entity<DeliveryProps> {
    constructor(
        public readonly props: DeliveryProps, id?: string) {
        super(
            {
                ...props,
                status: props.status ?? DeliveryStatus.PENDING,
                createdAt: props.createdAt ?? new Date(),
            }, id
        )

    }

     
    get status(): DeliveryStatus {
        return this.props.status
    }

    get driveId() {
        return this.props.driverId
    }

    public assignDriver(driverId: string): void {
        this.props.driverId = driverId
    }


    public startDelivery(): void {
        if (this.props.status !== DeliveryStatus.PENDING){
            throw new Error('Apenas entregas pendentes podem ser iniciadas')
        } 
        this.props.status = DeliveryStatus.IN_PROGRESS

    }

    public completdDelivery(): void {
        if(this.props.status !== DeliveryStatus.IN_PROGRESS){
            throw new Error('Apenas entregas iniciadas podem ser concluidas')
        }

        this.props.status = DeliveryStatus.DELIVERED
    }

    public cancelDelivery(): void {
        if(this.props.status !== DeliveryStatus.IN_PROGRESS){
            throw new Error('Apenas entregas iniciadas podem ser canceladas')
        }

        this.props.status = DeliveryStatus.CANCELLED
    }
}