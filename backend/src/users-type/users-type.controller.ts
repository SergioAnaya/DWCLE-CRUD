import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersTypeDTO } from './users-type.dto';
import { UsersTypeService } from './users-type.service';

@Controller('usersType')
export class UsersTypeController {
  constructor(private usersTypeService: UsersTypeService) {
    //this.createDefaultUsersType();
  }

  @Get()
  async getAllUsersType(): Promise<UsersTypeDTO[]> {
    return await this.usersTypeService.getAllUsersType();
  }

  @Get(':id')
  async getUserTypeById(@Param('id') id: string): Promise<UsersTypeDTO> {
    return await this.usersTypeService.getUserTypeById(id);
  }

  @Post()
  async newUserType(@Body() userType: UsersTypeDTO): Promise<UsersTypeDTO> {
    return await this.usersTypeService.newUserType(userType);
  }

  createDefaultUsersType() {
    this.newUserType(new UsersTypeDTO('1', 'Normal'));
    this.newUserType(new UsersTypeDTO('2', 'Admin'));
  }
}
