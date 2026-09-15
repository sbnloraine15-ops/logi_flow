import { Entity } from "../../../shared/domain/entites/entity.js"

export type DriverProps = {
    nome: string
    email: string
    vehicle: boolean
}

export class DriverEntity extends Entity <DriverProps> {
    constructor(props: DriverProps, id?: string){
        super(props, id)
    }

    
}

