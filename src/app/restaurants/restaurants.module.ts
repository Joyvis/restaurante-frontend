import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { RestaurantsComponent, SearchPipe } from './restaurants.component';
import { RestaurantsService } from './shared/restaurants.service';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
  	RestaurantsComponent,
  	RestaurantFormComponent,
    SearchPipe
  ],
  exports: [
    RestaurantsComponent
  ],
  providers: [
    RestaurantsService
  ]
})
export class RestaurantsModule { }
