import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ExcelDownloadReactComponent from './ExcelDownloadReactComponent';

@Component({
    selector: 'app-excelDownloadAngularComponent',
    template: '<div class="excelDownload" id="excelDownloadId"></div>',
})
export class ExcelDownloadAngularComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

    @Input() inputDataToExport: any;

    ngOnInit(): void {
        console.log('associate data in component ', this.inputDataToExport);
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
            <React.StrictMode>
                <div>
                    <ExcelDownloadReactComponent 
                    inputExcelData = {this.inputDataToExport}
                    />
                </div>
            </React.StrictMode>,
            document.getElementById('excelDownloadId')
        );
    }
}
