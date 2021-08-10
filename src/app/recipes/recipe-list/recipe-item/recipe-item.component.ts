import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() serverRecipe!: Recipe;
  @Output() RecipeData = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  OnclickItem(eventData: Recipe) {  
    this.RecipeData.emit(eventData);
  }
}
