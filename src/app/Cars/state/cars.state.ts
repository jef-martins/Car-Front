import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cars } from "../model/cars.model";

@Injectable({
    providedIn: 'root'
  })
  export class CarState {
  
    public cars = new BehaviorSubject<Cars[]>([]);
  
    constructor() { }
  
    get carsCollection$(): BehaviorSubject<Cars[]> {
      return this.cars;
    }
  
    set carsCollection(value: Cars[]) {
      this.cars.next(value);
    }
  
    get carsCollection(): Cars[] {
      return this.cars.getValue();
    }
  
  }