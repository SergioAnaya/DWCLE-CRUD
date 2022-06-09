import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book';
import { User } from '../interfaces/user';
import { UserType } from '../interfaces/user-type';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    booksUrl = environment.booksUrl;
    usersUrl = environment.usersUrl;
    usersTypeUrl = environment.usersTypeUrl;

    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private httpClient: HttpClient) {}

    getAllBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.booksUrl);
    }

    createBook(book: Book): Observable<any> {
        return this.httpClient.post<any>(this.booksUrl, book);
    }

    getBookById(id: string): Observable<Book> {
        return this.httpClient.get<Book>(`${this.booksUrl}/${id}`);
    }

    updateBook(id: string, book: Book): Observable<any> {
        return this.httpClient.put<any>(`${this.booksUrl}/update/${id}`, book);
    }

    deleteBook(id: string): Observable<any> {
        return this.httpClient.delete<any>(`${this.booksUrl}/delete/${id}`);
    }

    getAllUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.usersUrl);
    }

    createUser(user: User): Observable<any> {
        return this.httpClient.post<User>(this.usersUrl, user).pipe(catchError(this.handleError));
    }

    getUserById(id: string): Observable<User> {
        return this.httpClient.get<User>(`${this.usersUrl}/${id}`);
    }

    updateUser(id: string, user: User): Observable<any> {
        return this.httpClient.put<any>(`${this.usersUrl}/update/${id}`, user);
    }

    deleteUser(id: string): Observable<any> {
        return this.httpClient.delete<any>(`${this.usersUrl}/delete/${id}`);
    }

    getAllUsersType(): Observable<UserType[]> {
        return this.httpClient.get<UserType[]>(this.usersTypeUrl);
    }

    getUserTypeById(id: string): Observable<UserType> {
        return this.httpClient.get<UserType>(`${this.usersTypeUrl}/${id}`);
    }

    // Handle API errors
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }
}
