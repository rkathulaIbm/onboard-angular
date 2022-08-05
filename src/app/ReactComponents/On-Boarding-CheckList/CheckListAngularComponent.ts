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
  template: '<div class="checklist" id="checkListId"></div>',
})
export class CheckListAngularComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  ngOnInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }
  ngAfterViewInit(): void {
    this.render();
  }
  ngOnDestroy(): void { }

  private render() {
    ReactDOM.render(
      React.createElement(CheckListMainComponent),
      document.getElementById('checkListId')
    );
  }
}
