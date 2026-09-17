import { Entity } from "../../../shared/domain/entites/entity.js"
import { DriveValidatorFactory } from "../../validators/drive.validator.js"

export class DriverProps {
    name: string
    email: string
    authorized: boolean
    password: string
    createdAt?: Date
}

export class DriverEntity extends Entity<DriverProps> {
    constructor(public readonly props: DriverProps, id?: string) {
        super(props, id)
        this.props.createdAt =  this.props.createdAt ?? new Date()
        this.props.authorized = true
    }

    update(value: string): void {
        DriverEntity.validate({
            ...this.props,
            name: value
        })
        this.name = value
    }

    updatePassword(value: string): void {
        DriverEntity.validate({
            ...this.props,
            password: value,
        })
        this.password = value
    }
    static validate(props: DriverProps) {
        const validator = DriveValidatorFactory.create()
        const isValid = validator.validate(props)

        if(!isValid){
            throw new Error('ERro ao validar dados no cadastro',validator.errors)
        }
    }

    get name() {
        return this.props.name
    }

    private set name(value: string) {
        this.props.name = value

    }

    get email() {
        return this.props.email
    }

    private set email(value: string) {
        this.props.email = value

    }

    get authorized() {
        return this.props.authorized
    }

    private set authorized(value: boolean) {
        this.props.authorized = value

    }

     get password() {
        return this.props.password
    }

    private set password(value: string) {
        this.props.password = value

    }
}