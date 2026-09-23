import { RepositoryInMemory } from "../../../shared/domain/repositories/ropository-in-memory.js";
import { DeliveryEntity } from "../../domain/entities/delivery.entity.js";
import { DeliveryRepository } from '../../domain/repository/delivery-repository.js';

export class DeliveryRepositoryInMemory
    extends RepositoryInMemory<DeliveryEntity>
    implements DeliveryRepository.Repository {
}