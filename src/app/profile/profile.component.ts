import { Component } from '@angular/core';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css',
        '../../assets/css/main-style.css']
})

export class ProfileComponent {

    user: any;

    constructor(private cacheService: CacheService, private router: Router) {

    }

    ngOnInit() {
        this.user = this.cacheService.selectedUser;
    }

    back() {
        this.router.navigate(["userlist"]);
    }

}
