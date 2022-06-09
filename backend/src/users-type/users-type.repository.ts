import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersTypeDTO } from 'src/users-type/users-type.dto';
import { Repository } from 'typeorm';
import { UsersTypeEntity } from './users-type.entity';
import { UsersTypeMapper } from './users-type.mapper';

@Injectable()
export class UsersTypeRepository {
    constructor(
        @InjectRepository(UsersTypeEntity)
        private usersTypeRepository: Repository<UsersTypeEntity>,
        private mapper: UsersTypeMapper,
    ) {}

    getAllUsersType(): Promise<UsersTypeEntity[]> {
        return this.usersTypeRepository.find();
    }

    getUserTypeById(id: string): Promise<UsersTypeEntity> {
        return this.usersTypeRepository.findOne(id);
    }

    newUserType(usersTypeDTO: UsersTypeDTO): Promise<UsersTypeEntity> {
        const newUserType = this.mapper.dtoToEntity(usersTypeDTO);
        return this.usersTypeRepository.save(newUserType);
    }
}
