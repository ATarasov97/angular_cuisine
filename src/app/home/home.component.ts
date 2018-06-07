import { Component, OnInit } from '@angular/core';
import {delay} from "rxjs/internal/operators";
import {reject} from "q";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cuisines = [
    {id: 1, name: 'Chinese'},
    {id: 2, name: 'Georgian'},
    {id: 3, name: 'Japanese'}
  ];
  dishes = [
    {id: 1, cuisine_id: 1, name: 'Shou Mian'},
    {id: 2, cuisine_id: 1, name: 'Mantou'},
    {id: 3, cuisine_id: 1, name: 'Soup'},
    {id: 4, cuisine_id: 2, name: 'Adjaran'},
    {id: 5, cuisine_id: 2, name: 'Khachapuri'},
    {id: 6, cuisine_id: 3, name: 'Rice'},
    {id: 7, cuisine_id: 3, name: 'Sushi'},
    {id: 8, cuisine_id: 3, name: 'Chinmi'},
    {id: 9, cuisine_id: 3, name: 'Sashimi'},
    {id: 10, cuisine_id: 1, name: 'Bing'},
    {id: 11, cuisine_id: 2, name: 'Badrijnis khizilala'}
  ];

  showedDishes = [];

  selectedCuisine = 0;

  loading = false;


  constructor() { }

  ngOnInit() {
  }

  onSelectCuisine(cuisine_id: number) {
    this.loading = true;
    this.selectedCuisine = cuisine_id;
    this.showedDishes = this.dishes.filter((item) => {
      return item.cuisine_id === Number(cuisine_id)
    });
    this.delay(1000).then(() => {this.loading = false});
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
