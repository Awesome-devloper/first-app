import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
 @Output('ChoiceManue') ChoiceManue = new EventEmitter<{ selected: string[] }>();

 RecipesCalled(){
   this.ChoiceManue.emit({selected:['Recipes']});
  
 }
 ShoppingListCalled(){
  this.ChoiceManue.emit({selected:['Shopping']});
 }
}
