import { UseCase } from "../../../shared/aplication/usecase/use-case.js"
import { DriverRepository } from "../../domain/repository/driver-repository.js"
import { DiverOutputMapper, DriverDtoOutput } from "../dto/drive.dto.js"

export namespace GetDriver {
    export type Input = {
        id: string
    }

    export type Output = DriverDtoOutput

    export class GetDriverUseCase implements UseCase<Input, Output>{
        constructor(private driverRepository: DriverRepository.Repository){}

        async execute(input: Input): Promise<Output> {
                const entity = await this.driverRepository.findById(input.id)

            return DiverOutputMapper.toOutput(entity)
        }
}
}