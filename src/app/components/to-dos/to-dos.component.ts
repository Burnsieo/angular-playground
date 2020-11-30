import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'First ToDo',
        completed: false
      },
      {
        id: 2,
        title: 'Second ToDo',
        completed: false
      }
    ]
  }

}
