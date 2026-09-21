import { randomUUID } from "node:crypto"
import { DeliveryStatus } from "../../../delivery/domain/enum/elivery-status.enum.js"
import { DeliveryProps } from "../../../delivery/domain/entities/delivery.entity.js"

export abstract class Entity<Props = any> {
    public readonly props: Props
    public readonly _id: string

    constructor(props: Props, id?: string){
        this.props = props
        this._id =  id || randomUUID()


    }

    get id() {
        return this._id
    }

    toJSON(): Required<{ id: string } & Props> {
        return {
            id: this._id,
            ...this.props
        } as Required<{ id: string } & Props>
    }
} 