import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import * as appConfig from '../../app.config';

@Injectable()
export class RestaurantsService {

  	private url: string = appConfig.apiURL + "/restaurant";

	constructor(private http: Http) { }

	getRestaurants(){
	return this.http.get(this.url)
	  .map(res => res.json());
	}

	searchRestaurants(name){
		return this.http.get(this.getSearchRestaurantUrl(name))
	  		.map(res => res.json());
	}

	getRestaurant(id){
	return this.http.get(this.getRestaurantUrl(id))
	  .map(res => res.json());
	}

	addRestaurant(restaurant){
	return this.http.post(this.url, restaurant)
	  .map(res => res.json());
	}

	updateRestaurant(restaurant){
	return this.http.patch(this.getRestaurantUrl(restaurant.id), restaurant)
	  .map(res => res.json());
	}

	deleteRestaurant(id){
	return this.http.delete(this.getRestaurantUrl(id))
	  .map(res => res.json());
	}

	private getRestaurantUrl(id){
		return this.url + "/" + id;
	}

	private getSearchRestaurantUrl(name){
		return this.url + "_search/" + encodeURI(name);
	}

}
