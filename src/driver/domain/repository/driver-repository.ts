import { SearchbleRepository } from "../../../shared/domain/repositories/searchable-repository-contracts.js";
import { DriverEntity } from "../entites/driver.entity.js";

export namespace DriverRepository {
    export interface Repository extends SearchbleRepository<
    DriverEntity>{}
}