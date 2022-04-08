import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cars } from '../../model/cars.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Input() itens!: Cars[] | null;
  @Output() public onEdit: EventEmitter<number> = new EventEmitter();
  @Output() public onDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  edit(id: number | undefined) {
    this.onEdit.emit(id);
  }

  delete(id: number | undefined) {
    this.onDelete.emit(id);
  }

}
