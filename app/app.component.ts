import {Component} from '@angular/core';

/**
 * Task
 */
class Task {
    id: number;
    name: string;
}

let TASKS:Task[] = [
    {id: 1, name: 'Trabalho'},
    {id: 2, name: 'Lavar prato'},
    {id: 3, name: 'Tirar poeira'}
];

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <ul>
            <li *ngFor="let task of tasks" (click)="onClick(task)" >{{ task.id }} - {{ task.name }}</li>
        </ul>
        <input (keypress)="onKeyPress($event)" />
        <button type="button" (click)="onClick({})">Clique aqui</button>
    `
})

export class AppComponent{
    title = "Lista de tarefas";
    tasks:Task[] = TASKS;

    onClick(task){
        console.log(task);
    }

    onKeyPress(event){
        console.log(event);
    }
}