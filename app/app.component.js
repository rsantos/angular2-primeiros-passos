"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
 * Task
 */
var Task = (function () {
    function Task() {
    }
    return Task;
}());
var TASKS = [
    { id: 1, name: 'Trabalho' },
    { id: 2, name: 'Lavar prato' },
    { id: 3, name: 'Tirar poeira' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Lista de tarefas";
        this.tasks = TASKS;
    }
    AppComponent.prototype.onClick = function (task) {
        console.log(task);
    };
    AppComponent.prototype.onKeyPress = function (event) {
        console.log(event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{ title }}</h1>\n        <ul>\n            <li *ngFor=\"let task of tasks\" (click)=\"onClick(task)\" >{{ task.id }} - {{ task.name }}</li>\n        </ul>\n        <input (keypress)=\"onKeyPress($event)\" />\n        <button type=\"button\" (click)=\"onClick({})\">Clique aqui</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map