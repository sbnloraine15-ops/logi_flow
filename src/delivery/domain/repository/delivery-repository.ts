
import { SearchbleRepository } from "../../../shared/domain/repositories/searchable-repository-contracts.js";
import { DeliveryEntity } from "../entities/delivery.entity.js";

export namespace DeliveryRepository {
    export interface Repository extends SearchbleRepository <DeliveryEntity>{}
}