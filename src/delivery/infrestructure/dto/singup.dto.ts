import { IsNotEmpty, IsString } from "class-validator";
import { CreateDelivery } from "../../aplication/usecase/singup-delivery.js";
import { DeliveryStatus } from "../../domain/enum/elivery-status.enum.js";

export class SingupDto implements CreateDelivery.Input {
    @IsString()
    @IsNotEmpty()
    status: DeliveryStatus;
    @IsString()
    @IsNotEmpty()
    driverId: string;

}