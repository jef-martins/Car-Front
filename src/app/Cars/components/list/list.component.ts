import { Component, Input, OnInit } from '@angular/core';
import { Cars } from '../../model/cars.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  
  @Input() itens!: Cars[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
