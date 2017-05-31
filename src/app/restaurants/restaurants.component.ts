import { Component, ViewChild, ElementRef, OnInit, Pipe, PipeTransform } from '@angular/core';
import { RestaurantsService } from "./shared/restaurants.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Restaurant } from "./shared/restaurant";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  @ViewChild('input')
  input: ElementRef;

  private restaurant: Restaurant[] = [];
  private restaurants: Restaurant[] = [];

  constructor( private restaurantsService: RestaurantsService) {}  

  ngOnInit() {
    let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
      eventObservable.subscribe();

  	this.restaurantsService.getRestaurants()
      .subscribe(data => this.restaurants = data);
  }

  deleteRestaurant(restaurant){
    if (confirm("Tem certeza que deseja remover o restaurante " + restaurant.name + "?")) {
      var index = this.restaurants.indexOf(restaurant);
      this.restaurants.splice(index, 1);

      this.restaurantsService.deleteRestaurant(restaurant.id)
        .subscribe(null,
          err => {
            alert("Não foi possível remover o restaurante.");
            // Revert the view back to its original state
            this.restaurants.splice(index, 0, restaurant);
          });
    }
  }

}

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any[] {
      searchTerm = searchTerm.toUpperCase();
      return data.filter(item => {
        return item.name.toUpperCase().indexOf(searchTerm) !== -1 
      });
  }
}
