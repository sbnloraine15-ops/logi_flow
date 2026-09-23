import { Entity } from "../entites/entity.js";
import { RepositoryInterface } from "./repository-contracts.js";
import { RepositoryInMemory } from "./ropository-in-memory.js";

export interface SearchbleRepository<E extends Entity> extends RepositoryInterface<E>{
    
}