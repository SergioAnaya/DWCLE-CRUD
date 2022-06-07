import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async getAllUsers(): Promise<UsersDTO[]> {
        return await this.usersService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<UsersDTO> {
        return await this.usersService.getUserById(id);
    }

    @UsePipes(new ValidationPipe({ whitelist: true })) // Ignora todos los campos que no pertenecen al DTO con la opción de whitelist
    @Post()
    async newUser(@Body() user: UsersDTO): Promise<UsersDTO> {
        return await this.usersService.newUser(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: UsersDTO): Promise<UsersDTO> {
        return await this.usersService.updateUser(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<void> {
        return await this.usersService.deleteUser(id);
    }
}
