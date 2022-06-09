import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/database/http.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['id', 'username', 'name', 'lastname', 'userType', 'actions'];

    id!: string;

    constructor(private httpService: HttpService, private route: ActivatedRoute, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            if (params.added) {
                this.openSnackBar('User has been added correctly.', 'Close');
            }
        });
        this.readUsers();
    }

    readUsers() {
        this.httpService.getAllUsers().subscribe((response: any) => {
            this.dataSource.data = response;
        });
    }

    deleteUser() {
        this.httpService.deleteUser(this.id).subscribe(() => {});
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
    }
}
