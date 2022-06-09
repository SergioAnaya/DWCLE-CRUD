import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UsersDTO {
    id?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastname: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly userTypeId: number;

    constructor(id: string, username: string, password: string, name: string, lastname: string, userTypeId: number) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.userTypeId = userTypeId;
    }
}
