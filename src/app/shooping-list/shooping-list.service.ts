import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoopingService {
    showDetail = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Temoto', 5),
        new Ingredient('Apple', 10)
    ];
    GetDataFromOtherServices(ingredint: Ingredient[]) {
        
        
        this.ingredients.push(...ingredint);
        this.showDetail.emit(this.ingredients)
    }
}