import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CARS } from "../model/car.constantes";
import { Cars } from "../model/cars.model";

@Injectable({
    providedIn: 'root'
  })
  export class CarState {
  
    public cars = new BehaviorSubject<Cars[]>([]);
    public editCars = new BehaviorSubject<Cars>(CARS);
  
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

    get editCarsCollection$(): BehaviorSubject<Cars> {
      return this.editCars;
    }
  
    set editCarsCollection(value: Cars) {
      this.editCars.next(value);
    }
  
    get editCarsCollection(): Cars {
      return this.editCars.getValue();
    }
  
  }