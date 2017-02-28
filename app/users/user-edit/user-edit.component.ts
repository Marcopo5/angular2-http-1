import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './app/users/user-edit/user-edit.component.html'
})
export class UserEditComponent implements OnInit {
	user: User;

	constructor(private service: UserService, private route: ActivatedRoute ) {}

	ngOnInit() {
		// grab the user
		let id = this.route.snapshot.params['id'];
		this.service.getUser(id).subscribe(user => this.user);
	}

	// update the user
}