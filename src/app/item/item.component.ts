import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  editable = false;
//An @Input() serves as a doorway for data to come into the component,
  @Input() item!: Item;
  @Input() newItem!: string;
  //@Output() acts as a doorway for data to go out of the component. An @Output() has to be of type EventEmitter, so that a component can raise an event when there's data ready to share with another component.
  @Output() remove = new EventEmitter<Item>();
  
//The saveItem() method takes as an argument a description of type string. The description is the text that the user enters into the HTML <input> when editing an item in the list. This description is the same string from the <input> with the #editedItem template variable.
  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}


 

