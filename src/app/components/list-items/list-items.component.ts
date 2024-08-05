import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemsComponent } from "../row-items/row-items.component";

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemsComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter;
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }

  @Input() items!: Item[];

}
