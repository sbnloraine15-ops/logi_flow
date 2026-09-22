import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, HttpCode, UseGuards } from '@nestjs/common';
import { CreateDrive } from './aplication/usecases/create-drive.js';
import { DeleteDriver } from './aplication/usecases/delete-drive.js';
import { GetDriver } from './aplication/usecases/get-drive.js';
import { CreateDriverDto } from './infrastructure/dto/create-usecase.dto.js';
import { UpdateDriverDto } from './infrastructure/dto/update-usecase.dto.js';
import { UpdateDriver } from './aplication/usecases/update-drive.js';
import { AuthService } from '../auth/infrastructure/auth.service.js';

@Controller('driver')
export class DriverController {

  @Inject()
  private createDrive: CreateDrive.CreateDriveUseCase

  @Inject()
  private deleteDrive: DeleteDriver.DeleteDriverUseCase

  @Inject()
  private updateDrive: UpdateDriver.UpdateDriverUseCase

  @Inject()
  private getDrive: GetDriver.GetDriverUseCase

  @Inject()
  private authService: AuthService

  @HttpCode(201)
  @Post()
  async create(@Body() createDriverDto: CreateDriverDto) {
    const output = await this.createDrive.execute(createDriverDto)
    console.log(output.id)
    const token = this.authService.generateJwt(output.id)
    console.log(token)
    return token
  }

  // @Get()
  // findAll() {
  //   return this.driverService.findAll();
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.getDrive.execute({ id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return await this.updateDrive.execute({
      id,
      ...updateDriverDto
    })
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.deleteDrive.execute({ id });
  }
}
