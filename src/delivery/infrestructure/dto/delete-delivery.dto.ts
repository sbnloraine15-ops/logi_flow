import { IsString } from "class-validator";
import { DeliveryDelete } from "../../aplication/usecase/delete-delivery.js";

export class DeleteDeliveryDto implements DeliveryDelete.Input{

    @IsString()
    id: string;
    
}