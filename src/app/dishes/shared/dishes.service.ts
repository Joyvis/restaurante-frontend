import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import * as appConfig from '../../app.config';

@Injectable()
export class DishesService {

  	private url: string = appConfig.apiURL + "/dish";

	constructor(private http: Http) { }

	getDishes(){
	return this.http.get(this.url)
	  .map(res => res.json());
	}

	getDish(id){
	return this.http.get(this.getDishUrl(id))
	  .map(res => res.json());
	}

	addDish(dish){
	return this.http.post(this.url, dish)
	  .map(res => res.json());
	}

	updateDish(dish){
	return this.http.patch(this.getDishUrl(dish.id), dish)
	  .map(res => res.json());
	}

	deleteDish(id){
	return this.http.delete(this.getDishUrl(id))
	  .map(res => res.json());
	}

	private getDishUrl(id){
		return this.url + "/" + id;
	}

}
