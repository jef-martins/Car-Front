import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Cars } from '../model/cars.model';

@Injectable({
    providedIn: 'root'
})
export class CarsApi {

    private url = 'http://localhost:8081/';
    
    constructor(private httpClient: HttpClient) { }

    save(request: Cars): Promise<Cars> {
        return lastValueFrom(this.httpClient.post<Cars>(this.url, request));
    }

    update(id:number, request: Cars): Promise<Cars> {
        return lastValueFrom(this.httpClient.put<Cars>(this.url + id, request));
    }

    select(id: number): Promise<Cars> {
        return lastValueFrom(this.httpClient.get<Cars>(this.url + id));
    }

    list(): Promise<Cars[]> {
        return lastValueFrom(this.httpClient.get<Cars[]>(this.url));
    }
    
    delete(id: number): Promise<any> {
        return lastValueFrom(this.httpClient.delete(this.url + id));
    }
}