import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { ClassValidatorFields } from "../../shared/validator/class-validator-filds.js"
import { DriverProps } from "../domain/entites/driver.entity.js"

export class DriveValidatorRules  {
    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsOptional()
    @IsBoolean()
    authorized?: boolean
    
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string

    @IsOptional()
    @IsDate()
    createdAt?: Date

    constructor({name, email, authorized, password, createdAt}: DriverProps){
        Object.assign(this, {email, name, authorized, password, createdAt})
    }
}


export class DriveValidator extends ClassValidatorFields<DriveValidatorRules>{
    validate(data: DriveValidatorRules): boolean {
        return super.validate(new DriveValidatorRules(data ?? ({} as DriverProps)))
    }
}

export class DriveValidatorFactory {
    static create(): DriveValidator{
        return new DriveValidator
    }
}
