import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  RecipeData: Recipe={} as Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  EVpobgration(recipeData: Recipe) {  
    this.RecipeData = recipeData;
  }
}
