import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
	templateUrl: './app/login/login.component.html'
})
export class LoginComponent implements OnInit {
	credentials = { username: '', password: '' }
	successMessage: string = '';
	errorMessage: string = '';

	constructor(private service: AuthService) {}

	ngOnInit() {}

	/**
	 * Login a user
	 */
	login() {
		this.service.login(this.credentials.username, this.credentials.password)
			.subscribe(
				data => {

				},
				error => {

				}
			)
	}
}