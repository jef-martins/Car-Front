import { Routes } from "@angular/router";
import { AddComponent } from "./components/add/add.component";
import { ListComponent } from "./components/list/list.component";
import { AllComponent } from "./container/all/all.component";
import { CreateComponent } from "./container/create/create.component";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: AllComponent},
    { path: 'add', component: CreateComponent},
];