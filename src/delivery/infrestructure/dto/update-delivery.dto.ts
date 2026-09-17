import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UpdateDelivery } from "../../aplication/usecase/AcceptDeliveryUseCase.js";
import { DeliveryStatus } from "../../domain/enum/elivery-status.enum.js";


export class UpdateDeliveryDto {
    @IsOptional()
    @IsString()
    driverId: string;
}
