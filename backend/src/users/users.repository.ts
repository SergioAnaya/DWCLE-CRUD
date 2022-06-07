import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';
import { UsersMapper } from './users.mapper';

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
        private mapper: UsersMapper,
    ) {}

    getAllUsers(): Promise<UsersEntity[]> {
        return this.usersRepository.find({ relations: ['user_type_id'] });
    }

    getUserById(id: string): Promise<UsersEntity> {
        return this.usersRepository.findOne(id);
    }

    newUser(usersDTO: UsersDTO): Promise<UsersEntity> {
        const newUser = this.mapper.dtoToEntity(usersDTO);
        return this.usersRepository.save(newUser);
    }

    async updateUser(id: string, usersDTO: UsersDTO): Promise<UsersEntity> {
        usersDTO.id = id;
        const updateUser = this.mapper.dtoToEntity(usersDTO);
        await this.usersRepository.update(id, updateUser);
        return this.usersRepository.findOne(id);
    }

    deleteUser(id: string): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }
}
