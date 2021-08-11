import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css'],
})
export class ShoopingEditComponent implements OnInit {
  @Output() sendData = new EventEmitter<Ingredient>();
  @ViewChild('txtName') productName!: ElementRef;
  @ViewChild('txtAmount') productCount!: ElementRef;

  constructor() { }

  ngOnInit(): void { }
  btnOnSave() {

    this.sendData.emit(new Ingredient(
      this.productName.nativeElement.value,
      (this.productCount.nativeElement.value as number),
    ));


  }
}
