import { Component, OnInit } from '@angular/core';
import { DishesService } from "./shared/dishes.service";

import { Dish } from "./shared/dish";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  private dishes: Dish[] = [];

  constructor( private dishesService: DishesService) {}  

  ngOnInit() {
  	this.dishesService.getDishes()
      .subscribe(data => this.dishes = data);
  }

  deleteDish(dish){
    if (confirm("Tem certeza que deseja remover o prato " + dish.name + "?")) {
      var index = this.dishes.indexOf(dish);
      this.dishes.splice(index, 1);

      this.dishesService.deleteDish(dish.id)
        .subscribe(null,
          err => {
            alert("Não foi possível remover o prato.");
            // Revert the view back to its original state
            this.dishes.splice(index, 0, dish);
          });
    }
  }
}
