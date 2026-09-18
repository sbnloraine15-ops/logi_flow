import { UseCase } from "../../../shared/aplication/usecase/use-case.js"
import { DriverRepository } from "../../domain/repository/driver-repository.js"
import { DiverOutputMapper, DriverDtoOutput } from "../dto/drive.dto.js"

export namespace UpdateDriver {
    export type Input = {
        id: string
        name: string
        email: string
        authorized?: boolean
    }

    export type Output = DriverDtoOutput

    export class UpdateDriverUseCase implements UseCase<Input, Output>{
        constructor(private driverRepository: DriverRepository.Repository){}
        async execute(input: Input):Promise<Output> {
            const entity = await this.driverRepository.findById(input.id)

            if(!entity){
                throw new Error('Usuario inexistente')
            }

            await this.driverRepository.update(entity)

            return DiverOutputMapper.toOutput(entity)
            

        }
        
    }
}