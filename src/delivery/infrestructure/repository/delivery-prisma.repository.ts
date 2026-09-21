import { Injectable, NotFoundException } from "@nestjs/common";
import { DeliveryRepository } from "../../domain/repository/delivery-repository.js";
import { DeliveryEntity, DeliveryProps } from "../../domain/entities/delivery.entity.js";
import { PrismaService } from "../../../shared/infrestucture/database/prima-service.js";
import { Delivery } from "../../../generated/prisma/client.js";
import { DeliveryStatus } from "../../domain/enum/elivery-status.enum.js";
@Injectable()
export class DeliveryPrismaRepository implements DeliveryRepository.Repository {
    constructor(private prisma: PrismaService) { }
    async insert(entity: DeliveryEntity): Promise<void> {
        await this.prisma.delivery.create({
            data: entity.toJSON()
        })
    }
    async findAll(): Promise<DeliveryEntity[]> {
        const delivery = await this.prisma.delivery.findMany();
        return delivery.map((deliveryss: Delivery) => this.toEntity(deliveryss))
    }

    async findById(id: string): Promise<DeliveryEntity> {
        return this._get(id)
    }
    async update(entity: DeliveryEntity): Promise<void> {
        await this._get(entity._id)
        await this.prisma.delivery.update({
            where: {
                id: entity.id,
            },
            data: entity.toJSON(),
        });

    }
    async delete(id: string): Promise<void> {
        await this._get(id)

        this.prisma.delivery.delete({
            where: {id}
        })
    }

    protected async _get(id: string): Promise<DeliveryEntity> {
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

    private toEntity(deliveryss: any): DeliveryEntity {
        const props: DeliveryProps = {
            status: deliveryss.DeliveryStatus,
            createdAt: deliveryss.Date,
            driverId: deliveryss.string,
        };

        return new DeliveryEntity(props, deliveryss.id);
    }
}


