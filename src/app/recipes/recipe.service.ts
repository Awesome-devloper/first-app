import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoopingService } from "../shooping-list/shooping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    constructor(private shoppService: ShoopingService) { }
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is Simplay Test',
            'https://img.taste.com.au/vhZfDaJw/taste/2017/07/lemongrass-beef-bowl-128353-1.jpg',
            [new Ingredient("appel", 1),
            new Ingredient("bread", 2)]
        ),
        new Recipe(
            'B Test Recipe',
            'This is Simplay Test B',
            'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg',
            [new Ingredient("appel", 1),
            new Ingredient("bread", 2)]
        ),
    ];
    getRecipeList() {
        return this.recipes.slice();
    }
    onlickRecipeItem = new EventEmitter<Recipe>();
    addIngridentToShoppingList(ingridentlist: Ingredient[]) {
        this.shoppService.GetDataFromOtherServices(ingridentlist);
    }
}