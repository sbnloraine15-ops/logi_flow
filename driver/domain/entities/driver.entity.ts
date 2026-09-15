import { HttpException } from "@nestjs/common"
import { Entity } from "../../../shared/domain/entites/entity.js"
import { DriveValidatorFactory } from "../../validators/drive.validator.js"

export type DriverProps = {
    name: string
    email: string
    vehicle: boolean
}

export class DriverEntity extends Entity <DriverProps> {
    constructor(props: DriverProps, id?: string){
        super(props, id)
    }

    upadate(value: string): void {
        DriverEntity.validate({
            ...this.props, 
            name:value
        })
        this.name = value
    }


    get name(){
        return this.props.name
    }

    private set name(value: string){
        this.props.name = value
    }
    static validate(props: DriverProps) {
        const validate = DriveValidatorFactory.create()
        const isValid = validate.validate(props)
        if(!isValid) {
            throw new Error('Driver não é valido')
        }
    }


}

