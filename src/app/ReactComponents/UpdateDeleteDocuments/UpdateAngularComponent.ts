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
  import UploadDeleteDocComponent from './UploadDeleteDocComponent';

  
  @Component({
    selector: 'app-updateAngularComponent',
    template: '<div id="root"></div>',
  })
  export class UpdateAngularComponent
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
        React.createElement(UploadDeleteDocComponent),
        document.getElementById('root')
      );
    }
  }