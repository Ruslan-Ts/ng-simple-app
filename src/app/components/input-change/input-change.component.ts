import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-change',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-change.component.html',
  styleUrl: './input-change.component.scss'
})
export class InputChangeComponent {
  @Input() name: string = '';
  @Output() nameChange = new EventEmitter<string>();
  onNameChange(model: string) {
    this.name = model;
    this.nameChange.emit(model);
  }
}
