import { Component} from '@angular/core';

@Component({
    selector: 'todolist-header',
    template: `      
        <header class="header">
    
          <h1>todos</h1>
              
      <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus>
      </header>
    `
})
export class TodolistHeaderComponent {


}