import { Component, OnInit } from '@angular/core';
import { CarsFacade } from '../../cars.facade';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(public facade: CarsFacade) { }

  ngOnInit(): void {
    this.facade.list();
  }

}
