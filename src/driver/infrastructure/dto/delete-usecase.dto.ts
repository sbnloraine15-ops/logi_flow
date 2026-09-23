import { IsString } from "class-validator";
import { DeleteDriver } from "../../aplication/usecases/delete-drive.js";

export class DeleteDriverDto implements DeleteDriver.Input{
    @IsString()
    id: string;
}