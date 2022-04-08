import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { CarsApi } from "./api/cars.api";
import { Cars } from "./model/cars.model";
import { CarState } from "./state/cars.state";


@UntilDestroy()
@Injectable()
export class CarsFacade {

    public cars$ = this.state.cars;
    public editCar$ = this.state.editCars;

    constructor(
        private api: CarsApi,
        private state: CarState,
        private route: Router
    ) { }

    async save(form: Cars) {
        try {
            const res = await this.api.save(form);
            this.route.navigate(['home']);
        } catch (err) {
            console.log(err)
        }
    }

    async update(form: Cars) {
        try {
            const res = await this.api.update(form.id || 0, form);
            this.route.navigate(['home']);
        } catch (err) {
            console.log(err)
        }
    }

    async select(id: number) {
        try {
            this.state.editCarsCollection = await this.api.select(id);
            this.route.navigate(['add']);
        } catch (err) {
            console.log(err)
        }
    }

    async list() {
        this.state.carsCollection = await this.api.list();
    }

    async delete(id: number) {
        try {
            const res = await this.api.delete(id);
            this.list();
        } catch (err) {
            console.log(err)
        }
    }

}