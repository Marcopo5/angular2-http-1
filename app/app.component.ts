import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-app',
    template: `
        <div class="jumbotron text-center">
        <h1>The App Lives!</h1>
        <p>{{ message }}</p>
        </div>
    `
})
export class AppComponent implements OnInit {
    
    constructor(private http: Http) {}

    ngOnInit() {
        this.http.get('https://reqres.in/api/users')
            .subscribe(data => {
                console.log('data', data)
            });
    }
}