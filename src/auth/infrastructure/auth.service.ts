import { Injectable, Options } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EnvConfigServic } from '../../shared/infrestucture/env-config/env-config.service.js';

type GenerateJwtProps={
    accessToken: string
}

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService, 
        private configService: EnvConfigServic
    ){}

    async generateJwt(driverId: string): Promise<GenerateJwtProps>{
        const accessToken = await this.jwtService.signAsync({driverId})

        return {accessToken}
    }

    async verifyJwt(token: string){
        return this.jwtService.verifyAsync(token, {
            secret: this.configService.getJwtSecret()

        })
    }
}
