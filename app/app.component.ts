import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title.name }}</h1>
    <input [value]="title.name"/>
    <input [(ngModel)]="title.description"/>
    {{ title.name }}
    {{ title.description }}
    `
})

export class AppComponent{
    title = {
        name: 'Hello World',
        description: 'Minha descricao'
    };
}