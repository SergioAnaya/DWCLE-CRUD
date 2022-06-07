import { Injectable } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';
import { UsersMapper } from './users.mapper';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository, private mapper: UsersMapper) {}

    async getAllUsers(): Promise<UsersDTO[]> {
        const users: UsersEntity[] = await this.usersRepository.getAllUsers();
        return users.map((book) => this.mapper.entityToDto(book));
    }

    async getUserById(id: string): Promise<UsersDTO> {
        const user: UsersEntity = await this.usersRepository.getUserById(id);
        return this.mapper.entityToDto(user);
    }

    async newUser(usersDTO: UsersDTO): Promise<UsersDTO> {
        const newUser: UsersEntity = await this.usersRepository.newUser(usersDTO);
        return this.mapper.entityToDto(newUser);
    }

    async updateUser(id: string, usersDTO: UsersDTO): Promise<UsersDTO> {
        const updateUser = await this.usersRepository.updateUser(id, usersDTO);
        return this.mapper.entityToDto(updateUser);
    }

    async deleteUser(id: string): Promise<void> {
        await this.usersRepository.deleteUser(id);
    }
}
