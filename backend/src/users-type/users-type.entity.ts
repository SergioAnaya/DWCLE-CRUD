import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users-type')
export class UsersTypeEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    user_type_id: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    name: string;

    constructor(userTypeId: string, name: string) {
        this.user_type_id = userTypeId;
        this.name = name;
    }
}
