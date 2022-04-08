import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() dadosEdit: Cars | null = CARS;
  @Output() public onSubmit: EventEmitter<Cars> = new EventEmitter();
  @Output() public onUpdate: EventEmitter<Cars> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group(this.dadosEdit || CARS);
  }

  submit() {
    if (this.dadosEdit?.id)
      this.onUpdate.emit(this.form.value);
    else
      this.onSubmit.emit(this.form.value);
  }

}
