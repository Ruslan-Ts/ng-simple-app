import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-data',
  standalone: true,
  imports: [],
  templateUrl: './input-data.component.html',
  styleUrl: './input-data.component.scss'
})
export class InputDataComponent {
  @Output() onChanged = new EventEmitter<boolean>();
  
  change(increased: boolean) {
    this.onChanged.emit(increased);
  }
}
