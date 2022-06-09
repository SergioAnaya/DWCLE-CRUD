import { Injectable } from '@nestjs/common';
import { BooksDTO } from './books.dto';
import { BooksEntity } from './books.entity';
import { BooksMapper } from './books.mapper';
import { BooksRepository } from './books.repository';

@Injectable()
export class BooksService {
    constructor(private booksRepository: BooksRepository, private mapper: BooksMapper) {}

    async getAllBooks(): Promise<BooksDTO[]> {
        const books: BooksEntity[] = await this.booksRepository.getAllBooks();
        return books.map((book) => this.mapper.entityToDto(book));
    }

    async getBookById(id: string): Promise<BooksDTO> {
        const book: BooksEntity = await this.booksRepository.getBookById(id);
        return this.mapper.entityToDto(book);
    }

    async newBook(booksDTO: BooksDTO): Promise<BooksDTO> {
        const newBook: BooksEntity = await this.booksRepository.newBook(booksDTO);
        return this.mapper.entityToDto(newBook);
    }

    async updateBook(id: string, booksDTO: BooksDTO): Promise<BooksDTO> {
        const updateBook = await this.booksRepository.updateBook(id, booksDTO);
        return this.mapper.entityToDto(updateBook);
    }

    async deleteBook(id: string): Promise<void> {
        await this.booksRepository.deleteBook(id);
    }
}
