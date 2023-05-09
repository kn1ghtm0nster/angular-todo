import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo list';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'workout', done: false },
  ];

  get items(): any[] {
    if (this.filter === 'all') {
      return this.allItems;
    }

    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string): void{
    this.allItems.unshift({description, done: false});
  }
}
