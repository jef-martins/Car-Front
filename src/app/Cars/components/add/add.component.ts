import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CARS } from '../../model/car.constantes';
import { Cars } from '../../model/cars.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public form!: FormGroup;
  @Output() onSubmit: EventEmitter<Cars> = new EventEmitter<Cars>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group(CARS);
  }

  submit(){
    console.log(this.form.value)
    this.onSubmit.emit(this.form.value);
  }

}
