import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
	selector: 'my-users',
	templateUrl: './app/users/users.component.html'
})
export class UsersComponent implements OnInit {
	successMessage: string = '';
	errorMessage: string = '';

	constructor(private service: UserService) {}

	ngOnInit() {
		this.service.userCreated$.subscribe(user => {
			this.successMessage = `${user.name} has been created!`;
			this.clearMessages();
		});

		this.service.userDeleted$.subscribe(() => {
			this.errorMessage = `The user has been deleted!`;
			this.clearMessages();
		});
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