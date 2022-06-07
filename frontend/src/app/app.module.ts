import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersListComponent } from './common/users/users-list/users-list.component';
import { BooksListComponent } from './common/books/books-list/books-list.component';
import { NavComponent } from './common/nav/nav.component';
import { AddUserComponent } from './common/users/add-user/add-user.component';

/**
 * Dashboard
 */

import { NgChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    declarations: [AppComponent, UsersListComponent, BooksListComponent, NavComponent, AddUserComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        HttpClientModule,
        NgChartsModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
