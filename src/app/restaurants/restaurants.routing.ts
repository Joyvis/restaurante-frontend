import { Routes, RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurants.component';
import { RestaurantFormComponent } from "./restaurant-form/restaurant-form.component";

const restaurantsRoutes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent, pathMatch: 'full' },
  { path: 'restaurants/new', component: RestaurantFormComponent},
  { path: 'restaurants/:id', component: RestaurantFormComponent}
];

export const restaurantsRouting = RouterModule.forChild(restaurantsRoutes);