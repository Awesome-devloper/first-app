import {
  Component
  , OnInit
  , Output
  , EventEmitter
} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {

  }
  @Output() DetailRecipe = new EventEmitter<Recipe>();
  recipes!: Recipe[];
  //  = [
  //   new Recipe(
  //     'A Test Recipe',
  //     'This is Simplay Test',
  //     'https://img.taste.com.au/vhZfDaJw/taste/2017/07/lemongrass-beef-bowl-128353-1.jpg'
  //   ),
  //   new Recipe(
  //     'B Test Recipe',
  //     'This is Simplay Test B',
  //     'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg'
  //   ),
  // ];

  ngOnInit() {
    this.recipes = this.recipeService.getRecipeList();
  }
  RecipeListClick(recipe: Recipe) {
    this.DetailRecipe.emit(recipe);


  }
}
