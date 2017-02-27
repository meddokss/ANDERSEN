import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-todo',
	templateUrl: 'app.component.html',
	styleUrls:['app.component.css']
})

export class AppComponent {
    title: string = 'TODOList';
}