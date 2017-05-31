import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Dish } from '../shared/dish';
import { DishesService } from '../shared/dishes.service';

import { Restaurant } from '../../restaurants/shared/restaurant';
import { RestaurantsService } from '../../restaurants/shared/restaurants.service';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html'
  // styleUrls: ['./dish-form.component.scss']
})
export class DishFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  dish: Dish = new Dish();
  private restaurants: Restaurant[] = [];

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private restaurantsService: RestaurantsService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      price: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      restaurant_id: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit() {
    this.restaurantsService.getRestaurants()       
    .subscribe(
      data => this.restaurants = data
    );
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Prato' : 'Cadastro de Prato';
      


      if (!id)
        return;

      this.dishesService.getDish(id)
        .subscribe(
          dish => this.dish = dish,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        dishValue = this.form.value;

    if (this.dish.id){
      dishValue.id = this.dish.id;
      result = this.dishesService.updateDish(dishValue);
    } else {
      result = this.dishesService.addDish(dishValue);
    }

    result.subscribe(data => this.router.navigate(['dishes']));
  }

}
