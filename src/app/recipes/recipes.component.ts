import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  RecipeData: Recipe = {} as Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  EVpobgration(recipeData: Recipe) {
    this.RecipeData = recipeData;
  }
}
