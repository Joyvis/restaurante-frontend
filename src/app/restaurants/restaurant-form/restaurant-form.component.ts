import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Restaurant } from '../shared/restaurant';
import { RestaurantsService } from '../shared/restaurants.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html'
  // styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  restaurant: Restaurant = new Restaurant();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Restaurante' : 'Cadastro de Restaurante';

      if (!id)
        return;

      this.restaurantsService.getRestaurant(id)
        .subscribe(
          restaurant => this.restaurant = restaurant,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        restaurantValue = this.form.value;

    if (this.restaurant.id){
      restaurantValue.id = this.restaurant.id;
      result = this.restaurantsService.updateRestaurant(restaurantValue);
    } else {
      result = this.restaurantsService.addRestaurant(restaurantValue);
    }

    result.subscribe(data => this.router.navigate(['restaurants']));
  }
}
