//contains the logic for the application's main page.
import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
//The filter property is of type union, which means filter could have the value of all, active, or done
  filter: 'all' | 'active' | 'done' = 'all';

  //The allItems array contains the to-do items and whether they are done. 
  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  //The getter, get items(), retrieves the items from the allItems array if the filter is equal to all. Otherwise, get items() returns the done items or the outstanding items depending on how the user filters the view.
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }
//The addItem() method takes an item that the user provides and adds it to the array when the user clicks the Add button. The addItem() method uses the array method unshift() to add a new item to the beginning of the array and the top of the list. You could alternatively use push(), which would add the new item to the end of the array and the bottom of the list.
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
//The remove() method uses the JavaScript Array.splice() method to remove one item at the indexOf the relevant item. In plain English, this means that the splice() method removes the item from the array.
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
  
}
