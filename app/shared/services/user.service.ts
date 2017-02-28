import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {
	private usersUrl: string = 'https://reqres.in/api/users';
	constructor(private http: Http) {}

	/**
	 * Grab all users
	 */
	getUsers(): Observable<User[]> {
	 	return this.http.get(this.usersUrl)
            .map(res => res.json().data)
            .map(users => users.map(this.toUser))
            .catch(this.handleError);
	}

	/**
	 * Get a single user
	 */
	getUser(id: number): Observable<User> {
		return this.http.get(`${this.usersUrl}/${id}`)
			.map(res => res.json().data)
			.map(this.toUser)
			.catch(this.handleError);
	}

	/**
	 * Create a user
	 */

	/**
	 * Update a user
	 */
	updateUser(user: User): Observable<User> {
		return this.http.put(`${this.usersUrl}/${user.id}`, user)
			.map(res => res.json())
			.catch(this.handleError);
	}

	/**
	 * Delete a user
	 */

	/**
	 * Convert user infor from API to our standard/format
	 */
	private toUser(user): User {
		return {
			id: user.id,
			name: `${user.first_name} ${user.last_name}`,
			username: user.first_name,
			avatar: user.avatar
		}
	}

	/**
	 * Handle any errors from API
	 */
	private handleError(err) {
		let errMessage: string;

    	if (err instanceof Response) {
    		let body = err.json() || '';
    		let error = body.error || JSON.stringify(body);
    		errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
    	}
    	else {
    		errMessage = err.message ? err.message : err.toString();
    	}

    	return Observable.throw(errMessage);
	}
}