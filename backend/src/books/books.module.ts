import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksEntity } from './books.entity';
import { BooksMapper } from './books.mapper';
import { BooksRepository } from './books.repository';
import { BooksService } from './books.service';

@Module({
    imports: [TypeOrmModule.forFeature([BooksEntity])],
    providers: [BooksMapper, BooksService, BooksRepository],
    controllers: [BooksController],
})
export class BooksModule {}
