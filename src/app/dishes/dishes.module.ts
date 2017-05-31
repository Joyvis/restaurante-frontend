import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DishesComponent } from './dishes.component';
import { DishesService } from './shared/dishes.service';
import { DishFormComponent } from './dish-form/dish-form.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,

  ],
  declarations: [
  	DishFormComponent,
  	DishesComponent
  ],
  exports: [
    DishesComponent
  ],
  providers: [
    DishesService
  ]
})
export class DishesModule { }
