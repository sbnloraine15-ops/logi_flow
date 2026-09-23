import { UseCase } from "../../../shared/aplication/usecase/use-case.js"
import { DriverRepository } from "../../domain/repository/driver-repository.js"

export namespace DeleteDriver {
    export type Input = {
        id: string
    }

    export type Output = void

    export class DeleteDriverUseCase implements UseCase<Input, Output> {
        constructor(private driverRepository: DriverRepository.Repository) { }
        async execute(input: Input): Promise<Output> {
            const entity = await this.driverRepository.findById(input.id)
            if (!entity) {
                throw new Error('Usuario inexistente')
            }

            await this.driverRepository.delete(input.id)

        }

    }
}