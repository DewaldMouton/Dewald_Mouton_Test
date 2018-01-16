import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operator/delay';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css',
        '../../assets/css/main-style.css']
})

export class UserListComponent {
    list = false;
    panel = true;
    users = new Array();
    departments = new Array();
    appliedFilter = 'none';

    constructor(private http: Http,
        private cacheService: CacheService,
        private router: Router) {

        this.getMenuItems().subscribe(response => {
            this.users = response;
            this.getDepartments();
        }, error => {
            console.log(error);
        });
    }

    ngOnInit() {

    }

    public getMenuItems(): Observable<any> {
        return this.http.get('../assets/Employees.json')
            .map((response: any) => {
                return response.json();
            })
            .catch((error: any) => {
                return Observable.throw(error.statusText);
            });
    }

    //Go to selected profile
    public viewProfile(user) {
        this.cacheService.selectedUser = user;
        this.router.navigate(['profile']);
    }

    //Populate filter list
    public getDepartments() {
        if (this.departments.length < 1) {
            this.departments[0] = this.users[0].Department;
        }

        for (let i = 0; this.users.length > i; i++) {
            if (this.departments.includes(this.users[i].Department)) {
            } else {
                this.departments.push(this.users[i].Department);
            }
        }
    }

    public filter(filter) {
        this.appliedFilter = filter;
    }

}
