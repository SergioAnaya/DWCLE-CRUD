import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BooksEntity {
    @PrimaryGeneratedColumn('increment')
    book_id: string;

    @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
    title: string;

    @Column({ type: 'varchar', length: 30, nullable: false })
    author: string;

    @Column({ type: 'int', nullable: false })
    year: number;

    @Column({ type: 'enum', enum: ['available', 'notAvailable'], default: 'available', nullable: false })
    status: string;

    constructor(bookId: string, title: string, director: string, year: number, status: string) {
        this.book_id = bookId;
        this.title = title;
        this.author = director;
        this.year = year;
        this.status = status;
    }
}
