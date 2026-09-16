import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator"
import { DriverProps } from "../domain/entities/driver.entity.js"
import { ClassValidatorFields } from "../../shared/validator/class-validator-filds.js"

export class DriveValidatorRules  {
    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email: string


    @IsBoolean()
    vehicle: boolean
    
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string

    constructor({name, email}: DriverProps ){
        Object.assign(this, {email, name})
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
