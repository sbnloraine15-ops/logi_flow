import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { DriverEntity, DriverProps } from "../../domain/entites/driver.entity.js";
import { DriverRepository } from "../../domain/repository/driver-repository.js";
import { Driver } from "../../../generated/prisma/browser.js";
import { PrismaService } from "../../../shared/infrestucture/database/prima-service.js";


@Injectable()
export class DriverPrismaRepository
    implements DriverRepository.Repository {

    constructor(private prisma: PrismaService) {}

    async insert(entity: DriverEntity): Promise<void> {
        await this.prisma.driver.create({
            data: entity.toJSON(),
        });
    }

    async findAll(): Promise<DriverEntity[]> {
        const models = await this.prisma.driver.findMany();

        return models.map((model: Driver) => this.toEntity(model));
    }

    async findById(id: string): Promise<DriverEntity> {
        return this._get(id);
    }

    async update(entity: DriverEntity): Promise<void> {
        await this._get(entity.id);

        await this.prisma.driver.update({
            where: {
                id: entity.id,
            },
            data: entity.toJSON(),
        });
    }

    async delete(id: string): Promise<void> {
        await this._get(id);

        await this.prisma.driver.delete({
            where: { id },
        });
    }

    protected async _get(id: string): Promise<DriverEntity> {
        const model = await this.prisma.driver.findUnique({
            where: { id },
        });

        if (!model) {
            throw new NotFoundException(
                `Driver não encontrado com o ID ${id}`
            );
        }

        return this.toEntity(model);
    }

    private toEntity(model: any): DriverEntity {
        const props: DriverProps = {
            name: model.name,
            email: model.email,
            password: model.password,
            authorized: model.authorized,
            createdAt: model.createdAt,
        };

        return new DriverEntity(props, model.id);
    }
}