import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CheckListMainComponent from './CheckListMainComponent';

@Component({
  selector: 'app-checkListAngularComponent',
  template: '<div id="root"></div>',
})
export class CheckListAngularComponent
  implements OnChanges, AfterViewInit, OnDestroy
{
  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }
  ngAfterViewInit(): void {
    this.render();
  }
  ngOnDestroy(): void {}

  private render() {
    ReactDOM.render(
      React.createElement(CheckListMainComponent),
      document.getElementById('root')
    );
  }
}
