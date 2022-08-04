import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from 'src/app/ReactComponents/App';

const aratiContainerName = 'arati';

@Component({
  selector: 'app-arati',
  templateUrl: './arati.component.html',
  styleUrls: ['./arati.component.scss']
})
export class AratiComponent implements OnInit, AfterViewInit {

  @ViewChild(aratiContainerName,{static: true}) aratiContainerRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    this.renderSampleComponent();
  }

  private renderSampleComponent() {
    ReactDOM.render(
      <React.StrictMode>
        <div>
         <App/>
        </div>
      </React.StrictMode>
      , this.aratiContainerRef.nativeElement)
}

ngOnDestroy() {
  if(this.aratiContainerRef) {
  ReactDOM.unmountComponentAtNode(this.aratiContainerRef.nativeElement);
  }
}
}
