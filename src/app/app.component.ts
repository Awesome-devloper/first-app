import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  SeletedItemToshow: string[]=["Recipes"];

  OnMenueChoseing(Choice: { selected: string[] }) {
    console.log(Choice.selected);
    this.SeletedItemToshow=Choice.selected;
  }
}
