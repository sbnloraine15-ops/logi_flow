import { IsNotEmpty, IsString } from "class-validator";
import { UpdateDelivery } from "../../aplication/usecase/update-delivery.js";
import { DeliveryStatus } from "../../domain/enum/elivery-status.enum.js";


export class UpdateDeliveryDto implements UpdateDelivery.Input {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    status: DeliveryStatus;

}
