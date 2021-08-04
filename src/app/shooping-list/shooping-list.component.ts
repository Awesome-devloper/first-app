import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Temoto', 5),
    new Ingredient('Apple', 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
