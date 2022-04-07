import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsFacade } from './cars.facade';
import { HomeComponent } from './container/home/home.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { RouterModule } from '@angular/router';
import { routes } from './cars.routing';
import { HeaderComponent } from './components/header/header.component';
import { AllComponent } from './container/all/all.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './container/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    AddComponent,
    HeaderComponent,
    AllComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent
  ],
  providers:[
    CarsFacade
  ]
})
export class CarsModule { }
