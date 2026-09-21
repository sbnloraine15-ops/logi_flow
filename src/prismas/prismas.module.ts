import { Module } from '@nestjs/common';
import { PrismasService } from './prismas.service.js';


@Module({
    providers: [PrismasService],
    exports: [PrismasService]
})
export class PrismasModule { }
