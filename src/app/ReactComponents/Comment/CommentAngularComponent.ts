import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CommentMainComponent from './CommentMainComponent';

@Component({
  selector: 'app-commentAngularComponent',
  template: '<div id="comment"></div>',
})
export class CommentAngularComponent
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
      React.createElement(CommentMainComponent),
      document.getElementById('comment')
    );
  }
}
