import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { BooksDTO } from './books.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    async getAllBooks(): Promise<BooksDTO[]> {
        return await this.booksService.getAllBooks();
    }

    @Get(':id')
    async getBookById(@Param('id') id: string): Promise<BooksDTO> {
        return await this.booksService.getBookById(id);
    }

    @UsePipes(new ValidationPipe({ whitelist: true })) // Ignora todos los campos que no pertenecen al DTO con la opción de whitelist
    @Post()
    async newBook(@Body() book: BooksDTO): Promise<BooksDTO> {
        return await this.booksService.newBook(book);
    }

    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() book: BooksDTO): Promise<BooksDTO> {
        return await this.booksService.updateBook(id, book);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: string): Promise<void> {
        return await this.booksService.deleteBook(id);
    }
}
