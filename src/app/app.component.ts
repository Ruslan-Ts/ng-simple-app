import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


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
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Shopping list';

  text: string = '';
  price: number = 0;

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
  }
}
