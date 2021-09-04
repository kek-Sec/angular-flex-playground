import { Component, OnInit } from '@angular/core';
import {
  IMultiSelectSettings,
  IMultiSelectTexts,
  IMultiSelectOption,
} from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

fxLayout_value = 'row';
fxLayoutAlign_value = 'start';

  //#region fxLayout

  onfxLayoutChange() {
    this.fxLayout_value = this.FxLayoutOptions[this.FlexLayoutOptionsModel[0]-1].name;
}
  // Default selection
  FlexLayoutOptionsModel: number[] = [1];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-primary btn-block',
    selectionLimit: 1,
    autoUnselect: true,
    displayAllSelectedText: false,
    closeOnSelect: true,
    fixedTitle: true,
  };

  // Text configuration
  FxLayoutTexts: IMultiSelectTexts = {
    defaultTitle: 'FxLayout',
  };

  // Labels / Parents
  FxLayoutOptions: IMultiSelectOption[] = [
    { id: 1, name: 'row' },
    { id: 2, name: 'row-reverse' },
    { id: 3, name: 'column' },
    { id: 4, name: 'column-reverse' },
  ];
//#endregion

  //#region fxLayoutAlign

  onfxLayoutAlignChange() {
    this.fxLayoutAlign_value = this.fxLayoutAligntOptions[this.fxLayoutAlignOptionsModel[0]-1].name;
}
  // Default selection
  fxLayoutAlignOptionsModel: number[] = [1];

  // Text configuration
  fxLayoutAlignTexts: IMultiSelectTexts = {
    defaultTitle: 'fxLayoutAlign',
  };

  // Labels / Parents
  fxLayoutAligntOptions: IMultiSelectOption[] = [
    { id: 1, name: 'start' },
    { id: 2, name: 'center' },
    { id: 3, name: 'end' },
    { id: 4, name: 'space-around' },
    { id: 5, name: 'space-between' },
    { id: 6, name: 'space-evenly' },
    { id: 7, name: 'start start' },
    { id: 8, name: 'start center' },
    { id: 9, name: 'start end' },
    { id: 10, name: 'start space-around' },
    { id: 11, name: 'start space-between' },
    { id: 12, name: 'start strecth' },
    { id: 13, name: 'start baseline' },
    { id: 14, name: 'center start' },
    { id: 15, name: 'center center' },
    { id: 16, name: 'center end' },
    { id: 17, name: 'center space-around' },
    { id: 18, name: 'center space-between' },
    { id: 19, name: 'center strecth' },
    { id: 20, name: 'center baseline' },
    { id: 21, name: 'end start' },
    { id: 22, name: 'end center' },
    { id: 23, name: 'end end' },
    { id: 24, name: 'end space-around' },
    { id: 25, name: 'end space-between' },
    { id: 26, name: 'end strecth' },
    { id: 27, name: 'end baseline' },
    { id: 28, name: 'space-around start' },
    { id: 29, name: 'space-around center' },
    { id: 30, name: 'space-around end' },
    { id: 31, name: 'space-around space-around' },
    { id: 32, name: 'space-around space-between' },
    { id: 33, name: 'space-around strecth' },
    { id: 34, name: 'space-around baseline' },
    { id: 35, name: 'space-between start' },
    { id: 36, name: 'space-between center' },
    { id: 37, name: 'space-between end' },
    { id: 38, name: 'space-between space-around' },
    { id: 39, name: 'space-between space-between' },
    { id: 40, name: 'space-between strecth' },
    { id: 41, name: 'space-between baseline' },
    { id: 42, name: 'space-evenly start' },
    { id: 43, name: 'space-evenly center' },
    { id: 44, name: 'space-evenly end' },
    { id: 45, name: 'space-evenly space-around' },
    { id: 46, name: 'space-evenly space-between' },
    { id: 47, name: 'space-evenly strecth' },
    { id: 48, name: 'space-evenly baseline' },
  ];
//#endregion 
  
ngOnInit(): void {
  
}
  title = 'angular-flex-playground';
}
