import { Routes, RouterModule } from '@angular/router';

import { DishesComponent } from './dishes.component';
import { DishFormComponent } from "./dish-form/dish-form.component";

const dishesRoutes: Routes = [
  { path: 'dishes', component: DishesComponent, pathMatch: 'full' },
  { path: 'dishes/new', component: DishFormComponent},
  { path: 'dishes/:id', component: DishFormComponent}
];

export const dishesRouting = RouterModule.forChild(dishesRoutes);