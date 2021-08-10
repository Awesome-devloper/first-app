import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('data_recipe') Rdata: Recipe ={name:"",description:"",imagePath:""} ;
  constructor() { }

  ngOnInit(): void {
  }

}
