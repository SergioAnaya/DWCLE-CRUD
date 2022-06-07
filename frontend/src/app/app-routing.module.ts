import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './common/books/books-list/books-list.component';
import { AddUserComponent } from './common/users/add-user/add-user.component';
import { UsersListComponent } from './common/users/users-list/users-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'users' },
    { path: 'users', component: UsersListComponent },
    { path: 'books', component: BooksListComponent },
    { path: 'users/create', component: AddUserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
