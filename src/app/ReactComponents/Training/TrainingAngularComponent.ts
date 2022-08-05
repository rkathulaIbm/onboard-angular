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
  import TrainingMainComponent from './TrainingMainComponent';
  
  @Component({
    selector: 'app-trainingAngularComponent',
    template: '<div id="trainingId"></div>',
  })
  export class TrainingAngularComponent
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
        React.createElement(TrainingMainComponent),
        document.getElementById('trainingId')
      );
    }
  }
  