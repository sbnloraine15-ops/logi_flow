import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateDrive } from "../../aplication/usecases/create-drive.js";

export class CreateDriverDto implements CreateDrive.Input {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsBoolean()
    @IsOptional()
    authorized: boolean;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;
    
}