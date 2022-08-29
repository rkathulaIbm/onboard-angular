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
  import RecordingMainComponent from './RecordingMainComponent';
  
  @Component({
    selector: 'app-recordingAngularComponent',
    template: '<div id="recordingId"></div>',
  })
  export class RecordingAngularComponent
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
        React.createElement(RecordingMainComponent),
        document.getElementById('recordingId')
      );
    }
  }
  