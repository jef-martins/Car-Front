import { Injectable } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { lastValueFrom } from "rxjs";
import { CarsApi } from "./api/cars.api";
import { Cars } from "./model/cars.model";
import { CarState } from "./state/cars.state";


@UntilDestroy()
@Injectable()
export class CarsFacade {

    public cars$ = this.state.cars;

    constructor(
        private api: CarsApi,
        private state: CarState
    ) { }

    async save(form: Cars) {
        try {
            const res = await this.api.save(form);
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    async update(id: number) {

    }

    async select() {

    }

    async list() {
        this.state.carsCollection = await this.api.list();
    }

    async delete(id: number) {

    }

}