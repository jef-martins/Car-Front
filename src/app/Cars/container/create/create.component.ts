import { Component, OnInit } from '@angular/core';
import { CarsFacade } from '../../cars.facade';
import { Cars } from '../../model/cars.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public facade: CarsFacade) { }

  ngOnInit(): void {
  }

  save(form:Cars){
    console.log(form)
    this.facade.save(form);
  }

}
