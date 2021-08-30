import { Ingredient } from "../shared/ingredients.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient!:Ingredient[];
    
    constructor(name: string,desc: string,imagepath: string,ingredient:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagepath;
        this.ingredient=ingredient;
    }
}