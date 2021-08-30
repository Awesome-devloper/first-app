import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoopingService } from './shooping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients!: Ingredient[];
  // = [
  //   new Ingredient('Temoto', 5),
  //   new Ingredient('Apple', 10)
  // ];
  constructor(private shoopingService: ShoopingService) {
    this.shoopingService.showDetail.subscribe((data: Ingredient[]) => {
      this.ingredients.push(...data)
    });
  }

  ngOnInit() {
    this.ingredients = this.shoopingService.ingredients;
  }

  // loadData(data: Ingredient) {
  //   this.ingredients.push(data);
  // }
}
