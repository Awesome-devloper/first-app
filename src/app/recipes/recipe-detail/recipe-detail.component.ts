import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input('data_recipe') 
  Rdata!: Recipe;
  constructor(private recipeService: RecipeService) {
    this.recipeService.onlickRecipeItem.subscribe((repice: Recipe) => {
      this.Rdata = repice;
    });
  }

  ngOnInit(): void {
  }
  datasenderToIngrident() {
    this.recipeService.addIngridentToShoppingList(this.Rdata.ingredient);
  }
}
