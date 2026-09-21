import { DeliveryEntity } from "../../../delivery/domain/entities/delivery.entity.js";
import { RepositoryInMemory } from "../../../shared/domain/repositories/ropository-in-memory.js";
import { DriverEntity } from "../../domain/entites/driver.entity.js";
import { DriverRepository } from "../../domain/repository/driver-repository.js";


export class DriverRepositoryInMemory
    extends RepositoryInMemory<DriverEntity>
    implements DriverRepository.Repository {
}