import { Injectable } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersMapper {
  dtoToEntity(usersDTO: UsersDTO): UsersEntity {
    return new UsersEntity(
      usersDTO.id,
      usersDTO.username,
      usersDTO.password,
      usersDTO.name,
      usersDTO.lastname,
      usersDTO.userTypeId,
    );
  }

  entityToDto(usersEntity: UsersEntity): UsersDTO {
    return new UsersDTO(
      usersEntity.user_id,
      usersEntity.username,
      usersEntity.password,
      usersEntity.name,
      usersEntity.lastname,
      usersEntity.user_type_id,
    );
  }
}
