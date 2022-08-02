
import { AfterViewInit, Component,ElementRef,Inject, OnDestroy, OnInit ,ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import * as React from 'react';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnboardDialogComponent } from '../onboard-dialog/onboard-dialog.component';
import { ApiService } from '../services/api.service';
import * as ReactDOM from 'react-dom';
import { Sample } from 'src/app/react/Sample.component';
import { ExcelService } from '../services/excel.service';
import associateData from '../../assets/all-associates.json';  
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

const reactContainerName = 'reactContainer';
const exportContainerName='exportContainer'

@Component({
  selector: 'app-all-associates',
  templateUrl: './all-associates.component.html',
  styleUrls: ['./all-associates.component.scss']
})
export class AllAssociatesComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'MAT';
  displayedColumns: string[] = ['associateName', 'ibmId', 'emailIBM', 'location','role','itExpDate','view/edit','action'];
  tableDataSource!: MatTableDataSource<any>;
  inputMsgFromReact:string='';
  helloMsgFromReact:string='';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(reactContainerName,{static: true}) reactContainerRef!: ElementRef;
  @ViewChild(exportContainerName,{static: true}) exportContainerRef!: ElementRef;
  data:any=associateData.associates;
  constructor(private excelService:ExcelService,public route:Router, public dialog: MatDialog,private http:HttpClient,private api:ApiService) {}
  
  ngOnInit(): void {
    
    this.getAssociates();
  }

  ngAfterViewInit(): void {
    this.renderSampleComponent();
    this.exportFunctionality();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();

    if (this.tableDataSource.paginator) {
      this.tableDataSource.paginator.firstPage();
    }
  }

  actionFromReactComponent(event: any) {
    this.helloMsgFromReact = 'Hello Vijay From React - ' + event.target.innerHTML;
  }

  handleOnChangeFromReact(event:any) {
    this.inputMsgFromReact = event.target.value;
  }

  routeToRequestComponent(event:any){
    console.log('route to another component ');
    this.route.navigate(['angularReact'])
  }

  openDialog() {
    this.dialog.open(OnboardDialogComponent, {
      width:'50%',
      height:'70%' 
      // data: {
      //   animal: 'panda',
      // },
    });
  }

  getAssociates(){
    this.api.getAssociates()
    .subscribe({
      next:(res:any)=>{
        
        console.log(res);
         this.tableDataSource=new MatTableDataSource(res);
         this.tableDataSource.paginator=this.paginator;
         this.tableDataSource.sort=this.sort;

      },
      error:()=>{
        // alert("Error");

      },

    })
  }
  
  editAssociateDetails(row:any){
    
    this.route.navigate(['/addNewAssociate']);
  }

  viewAssociate(row:any){
    this.dialog.open(OnboardDialogComponent,{
      width:'50%',
      data:row
    });
  }

  
  downloadAllAssociatesDetails(){
    let url="http://localhost:9191/pru-associate/export-excel/"
    window.location.assign(url);
  }

  downloadIndividualAssociateDetails(data:any){
    // 12234a
    let url="http://localhost:9191/pru-associate/export-excel/"+data.ibmId;
    window.location.assign(url);
  }

  deleteAssociate(row:any){
   
  }


  // http://localhost:9191/pru-associate/export-excel/00RTV87412
  // http://localhost:9191/pru-associate/export-excel/

  private renderSampleComponent() {
      ReactDOM.render(
        <React.StrictMode>
          <div>
            <Sample 
              handleOnChangeFromAngular={(event:any) =>this.handleOnChangeFromReact(event)} 
              triggerEventFromReact={(event:any) => this.actionFromReactComponent(event)}
              navigate={(event:any) => this.routeToRequestComponent(event)}
            />
          </div> 
        </React.StrictMode>
        , this.reactContainerRef.nativeElement)
  }
  private exportFunctionality() {
    const exportAsXLSX=()=> {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
      var wscols = [
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30},
        {wch:30}
    ];
    
    worksheet['!cols'] = wscols;
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const data: Blob = new Blob([excelBuffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, "Allassociates" + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    ReactDOM.render(
      <React.StrictMode>
        <div>
        <span onClick={exportAsXLSX}>
        <BsFillCloudArrowDownFill/>
        </span> 
        </div> 
      </React.StrictMode>
      , this.exportContainerRef.nativeElement)
    }
  
  ngOnDestroy() {
    if(this.reactContainerRef) {
    ReactDOM.unmountComponentAtNode(this.reactContainerRef.nativeElement);
    }
    if(this.exportContainerRef) {
      ReactDOM.unmountComponentAtNode(this.exportContainerRef.nativeElement);
      }
}

}
