
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

const reactContainerName = 'reactContainer';

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
  constructor(public route:Router, public dialog: MatDialog,private http:HttpClient,private api:ApiService) {}
  ngOnInit(): void {
    
    this.getAssociates();
  }

  ngAfterViewInit(): void {
    this.renderSampleComponent();
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

  ngOnDestroy() {
    if(this.reactContainerRef) {
    ReactDOM.unmountComponentAtNode(this.reactContainerRef.nativeElement);
    }
}

}
