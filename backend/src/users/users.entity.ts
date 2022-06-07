import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsersTypeEntity } from 'src/users-type/users-type.entity';

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn('increment')
    user_id: string;

    @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    password: string;

    @Column({ type: 'varchar', length: 30, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 30, nullable: false })
    lastname: string;

    @ManyToOne(() => UsersTypeEntity, (type) => type.user_type_id)
    @JoinColumn({ name: 'user_type_id' })
    user_type_id: number;

    constructor(
        userId: string,
        username: string,
        password: string,
        name: string,
        lastname: string,
        userTypeId: number,
    ) {
        this.user_id = userId;
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.user_type_id = userTypeId;
    }
}
