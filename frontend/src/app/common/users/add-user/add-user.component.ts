import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/database/http.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
    addForm!: any;
    hide = true;
    submitted = false;

    constructor(private readonly formbulider: FormBuilder, private httpService: HttpService, private router: Router) {}

    ngOnInit(): void {
        this.addForm = this.formbulider.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            userTypeId: [1],
        });
    }

    createUser(user: User) {
        this.httpService.createUser(user).subscribe((_) => {
            this.router.navigate(['/'], { queryParams: { added: true } });
        });
    }

    onSubmit() {
        if (this.addForm.valid) {
            const newUser = this.addForm.value;
            this.createUser(newUser);
        }
        this.submitted = true;
    }
}
