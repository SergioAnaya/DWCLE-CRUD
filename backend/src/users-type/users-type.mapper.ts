import { Injectable } from '@nestjs/common';
import { UsersTypeDTO } from './users-type.dto';
import { UsersTypeEntity } from './users-type.entity';

@Injectable()
export class UsersTypeMapper {
    dtoToEntity(usersTypeDTO: UsersTypeDTO): UsersTypeEntity {
        return new UsersTypeEntity(usersTypeDTO.id, usersTypeDTO.name);
    }

    entityToDto(usersTypeEntity: UsersTypeEntity): UsersTypeDTO {
        return new UsersTypeDTO(usersTypeEntity.user_type_id, usersTypeEntity.name);
    }
}
