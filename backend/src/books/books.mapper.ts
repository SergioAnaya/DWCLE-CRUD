import { Injectable } from '@nestjs/common';
import { BooksDTO } from './books.dto';
import { BooksEntity } from './books.entity';

@Injectable()
export class BooksMapper {
    dtoToEntity(booksDTO: BooksDTO): BooksEntity {
        return new BooksEntity(booksDTO.id, booksDTO.title, booksDTO.author, booksDTO.year, booksDTO.status);
    }

    entityToDto(booksEntity: BooksEntity): BooksDTO {
        return new BooksDTO(
            booksEntity.book_id,
            booksEntity.title,
            booksEntity.author,
            booksEntity.year,
            booksEntity.status,
        );
    }
}
