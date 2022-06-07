import { Injectable } from '@nestjs/common';
import { UsersTypeDTO } from './users-type.dto';
import { UsersTypeEntity } from './users-type.entity';
import { UsersTypeMapper } from './users-type.mapper';
import { UsersTypeRepository } from './users-type.repository';

@Injectable()
export class UsersTypeService {
    constructor(private usersTypeRepository: UsersTypeRepository, private mapper: UsersTypeMapper) {}

    async getAllUsersType(): Promise<UsersTypeDTO[]> {
        const types: UsersTypeEntity[] = await this.usersTypeRepository.getAllUsersType();
        return types.map((book) => this.mapper.entityToDto(book));
    }

    async getUserTypeById(id: string): Promise<UsersTypeDTO> {
        const type: UsersTypeEntity = await this.usersTypeRepository.getUserTypeById(id);
        return this.mapper.entityToDto(type);
    }

    async newUserType(usersTypeDTO: UsersTypeDTO): Promise<UsersTypeDTO> {
        const newUserType: UsersTypeEntity = await this.usersTypeRepository.newUserType(usersTypeDTO);
        return this.mapper.entityToDto(newUserType);
    }
}
