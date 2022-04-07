import { Component, OnInit } from '@angular/core';
import { CarsFacade } from '../../cars.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public facade: CarsFacade) { }

  ngOnInit(): void {
  }

}
