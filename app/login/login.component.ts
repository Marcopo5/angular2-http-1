import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
	templateUrl: './app/login/login.component.html'
})
export class LoginComponent implements OnInit {
	credentials = { username: '', password: '' }
	successMessage: string = '';
	errorMessage: string = '';

	constructor(private service: AuthService, private router: Router) {}

	ngOnInit() {}

	/**
	 * Login a user
	 */
	login() {
		this.service.login(this.credentials.username, this.credentials.password)
			.subscribe(
				data => {
					this.router.navigate(['']);
					console.log('data', data)
				},
				error => {
					console.log(error);
					this.errorMessage = `Wrong email/username or password.`;
					this.clearMessages();
				}
			)
	}

	/**
	 * clear all messages after 5 seconds
	 */
	clearMessages() {
		setTimeout(() => {
			this.successMessage = '';
			this.errorMessage = '';
		}, 5000);
	}
}