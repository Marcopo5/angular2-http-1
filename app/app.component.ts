import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="navbar navbar-default">
                <div class="container-fluid"></div>
                <div class="navbar-header">
                    <a routerLink="/" class="navbar-brand">My HTTP app</a>
                </div>

                <ul class="nav navbar-nav">
                    <li><a routerLink="/users">Users</a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li *ngIf="!isLoggedIn"><a routerLink="/login">Login</a></li>
                    <li *ngIf="isLoggedIn"><a (click)="logout()">Logout</a></li>
                </ul>
             </div>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent implements OnInit {
    users: User[];

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router) {}

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(
                users => this.users = users,
                error => {
                    console.log('userService.getUsers error', error);
                }
            );
    }

    /**
     * Is the user logged in
     */
    get isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    /**
     * Log the user out
     */
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}