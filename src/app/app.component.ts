import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputDataComponent } from "./components/input-data/input-data.component";
import { InputChangeComponent } from "./components/input-change/input-change.component";
import { ChildComponent } from "./components/test-drive/test-drive.component";


class Item {
  name: string;
  price: number;
  done: boolean;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.done = false;
  }
}
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormsModule, InputDataComponent, InputChangeComponent, ChildComponent]
})
export class AppComponent { 
    name ="Ruslan";
  age = 35;
  visibility: boolean = true;
  chVis():void {
    this.visibility = !this.visibility
  }
  
    // ngOnChanges(changes: SimpleChanges) {
    //   for (let propName in changes) {
    //     let chng = changes[propName];
    //     let cur  = JSON.stringify(chng.currentValue);
    //     let prev = JSON.stringify(chng.previousValue);
    //     console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    //   }
    // }
  
  title = 'Shopping list';

  text: string = '';
  price: number = 0;

  clicks = 0;
  onChanged(increased: boolean) {
    increased ? this.clicks++ : this.clicks--;
  }

  items: Item[] = [
    {name: 'apple', price: 12, done: false},
    {name: 'orange', price: 14, done: false},
    {name: 'fish', price: 12, done: false},
    {name: 'meat', price: 11, done: false},
    {name: 'water', price: 5, done: true},
  ]

  addItem(text: string, price: number): void {
    if(text === null || text.trim() === "" || price === null)
            return;
    this.items.push(new Item(text, price));
    text = '';
    price = 0;
  }
}
