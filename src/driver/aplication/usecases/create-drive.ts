import { UseCase } from "../../../shared/aplication/usecase/use-case.js";
import { DriverEntity } from "../../domain/entites/driver.entity.js";
import { DriverRepository } from "../../domain/repository/driver-repository.js";
import { DriverDtoOutput } from "../dto/drive.dto.js";

export namespace CreateDrive {
    export type Input = {
        name: string
        email: string
        authorized: boolean
        password: string
        createdAt: Date
    }

    export type Output = DriverDtoOutput

    export class CreateDriveUseCase implements UseCase<Input, Output> {

        constructor(
            private driveRepository : DriverRepository.Repository
            hashProvaider: string
        ){}
        execute(input: Input): Promise<Output> {
            throw new Error("Method not implemented.");
        }

    }
}