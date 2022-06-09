import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { BooksDTO } from './books.dto';
import { BooksEntity } from './books.entity';
import { BooksMapper } from './books.mapper';

@Injectable()
export class BooksRepository {
    constructor(
        @InjectRepository(BooksEntity)
        private booksRepository: Repository<BooksEntity>,
        private mapper: BooksMapper,
    ) {}

    getAllBooks(): Promise<BooksEntity[]> {
        return this.booksRepository.find();
    }

    getBookById(id: string): Promise<BooksEntity> {
        return this.booksRepository.findOne(id);
    }

    newBook(booksDTO: BooksDTO): Promise<BooksEntity> {
        const newBook = this.mapper.dtoToEntity(booksDTO);
        return this.booksRepository.save(newBook);
    }

    async updateBook(id: string, booksDTO: BooksDTO): Promise<BooksEntity> {
        booksDTO.id = id;
        const updateBook = this.mapper.dtoToEntity(booksDTO);
        await this.booksRepository.update(id, updateBook);
        return this.booksRepository.findOne(id);
    }

    deleteBook(id: string): Promise<DeleteResult> {
        return this.booksRepository.delete(id);
    }
}
