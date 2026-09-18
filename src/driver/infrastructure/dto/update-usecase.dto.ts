import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { UpdateDriver } from "../../aplication/usecases/update-drive.js";

export class UpdateDriverDto implements Omit< UpdateDriver.Input, 'id'>{

    @IsString()
    @IsNotEmpty()
    name: string;

    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsBoolean()
    authorized?: boolean | undefined;
    
}