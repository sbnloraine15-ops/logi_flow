import { HashProvider } from "../../../shared/aplication/providers/hash-provider.js";
import { UseCase } from "../../../shared/aplication/usecase/use-case.js";
import { DriverEntity } from "../../domain/entites/driver.entity.js";
import { DriverRepository } from "../../domain/repository/driver-repository.js";
import { DiverOutputMapper, DriverDtoOutput } from "../dto/drive.dto.js";

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
            private driveRepository : DriverRepository.Repository, 
            private hashProvaider: HashProvider
        ){}
        async execute(input: Input): Promise<Output> {
            const {email, name, password} = input 

            if(!email || !name || !password ){
                throw new Error('Input data not provided')    
            }
            const hashPassword = await this.hashProvaider.generateHash(password)

            const entity = new DriverEntity(
                Object.assign(input, {password: hashPassword})
            )
            await this.driveRepository.insert(entity)
            return DiverOutputMapper.toOutput(entity)
        }

    }
}