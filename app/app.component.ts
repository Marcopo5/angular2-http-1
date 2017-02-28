import { Component } from '@angular/core';
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
export class AppComponent {
    
    constructor(private http: Http) {}

}