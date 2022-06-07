import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersTypeEntity } from './users-type.entity';
import { UsersTypeController } from './users-type.controller';
import { UsersTypeMapper } from './users-type.mapper';
import { UsersTypeService } from './users-type.service';
import { UsersTypeRepository } from './users-type.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UsersTypeEntity])],
    controllers: [UsersTypeController],
    providers: [UsersTypeMapper, UsersTypeService, UsersTypeRepository],
})
export class UsersTypeModule {}
