import { DriverEntity } from "../../domain/entites/driver.entity.js"

export type DriverDtoOutput = {
    id: string
    name: string
    email: string
    authorized: boolean
    password: string
    createdAt: Date
}

export class DiverOutputMapper {
    static toOutput(entity: DriverEntity): DriverDtoOutput{
        return entity.toJSON()
    }
}