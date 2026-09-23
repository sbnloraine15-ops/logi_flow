import { IsNotEmpty, IsString } from "class-validator";
import { GetDelivery } from "../../aplication/usecase/get-delivery.js";

export class GetDelivertDto implements GetDelivery.Input{
    @IsString()
    @IsNotEmpty()
    id: string;
    
}