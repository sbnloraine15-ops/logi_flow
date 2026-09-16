import { HttpException, HttpStatus } from "@nestjs/common";
import { Entity } from "../entites/entity.js";
import { RepositoryInterface } from "./repository-contracts.js";

export class RepositoryInMemory<E extends Entity>
    implements RepositoryInterface<E> {

    items: E[] = []

    async insert(entity: E): Promise<void> {
        this.items.push(entity)
    }
    async findAll(): Promise<E[]> {
        return this.items
    }
    async findById(id: string): Promise<E> {
        return this._get(id)
    }
    async update(entity: E): Promise<void> {
        await this._get(entity.id)
        const index = this.items.findIndex(items => items.id === entity.id )
        this.items[index] = entity

    }
    async delete(id: string): Promise<void> {
        this._get(id)
        const index = this.items.findIndex(items => items.id === id)
        this.items.splice(index, 1)
    }

    protected async _get(id: string): Promise<E> {
        const _id = `${id}`
        const entity = this.items.find(item => item.id === _id)
        if (!entity) {
            throw new HttpException('Entity not found', HttpStatus.NOT_FOUND)
        }
        return entity
    }


}