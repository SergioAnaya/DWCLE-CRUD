import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BooksDTO {
    id?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly author: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly year: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly status: string;

    constructor(id: string, title: string, author: string, year: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
    }
}
