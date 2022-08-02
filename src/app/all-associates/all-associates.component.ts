
import { AfterViewInit, Component,Inject, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnboardDialogComponent } from '../onboard-dialog/onboard-dialog.component';
import { ApiService } from '../services/api.service';
import { ExcelService } from '../services/excel.service';
import { allAssociates } from "../../json/response/all-associates";  

@Component({
  selector: 'app-all-associates',
  templateUrl: './all-associates.component.html',
  styleUrls: ['./all-associates.component.scss']
})
export class AllAssociatesComponent implements OnInit, AfterViewInit {
  title = 'MAT';
  isDataLoaded:boolean = false;
  displayedColumns: string[] = ['associateName', 'ibmId', 'emailIBM', 'location','role','itExpDate','view/edit','action'];
  tableDataSource!: MatTableDataSource<any>;
  associateData:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public route:Router, public dialog: MatDialog,private http:HttpClient,private api:ApiService, private excelService:ExcelService) {}
  
  ngOnInit(): void {
    this.getAssociates();
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();

    if (this.tableDataSource.paginator) {
      this.tableDataSource.paginator.firstPage();
    }
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
         this.tableDataSource=new MatTableDataSource(res);
         this.tableDataSource.paginator=this.paginator;
         this.tableDataSource.sort=this.sort;
         this.isDataLoaded=true;
      },
      error:()=>{
        console.log('Error getAssociates');
        this.tableDataSource=new MatTableDataSource(allAssociates);
        this.tableDataSource.paginator=this.paginator;
        this.tableDataSource.sort=this.sort;
        this.associateData = allAssociates;
        this.isDataLoaded=true;
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
    // let url="http://localhost:9191/pru-associate/export-excel/"
    // window.location.assign(url);
    this.excelService.exportAsExcelFile(allAssociates, 'all-associates');
  }

  downloadIndividualAssociateDetails(individualAssociate:any){
    // 12234a
    // let url="http://localhost:9191/pru-associate/export-excel/"+data.ibmId;
    // window.location.assign(url);
    console.log('individual data ',individualAssociate);
    this.excelService.exportAsExcelFile([individualAssociate], 'individual-associates');
  }

  deleteAssociate(row:any){
   
  }


  // http://localhost:9191/pru-associate/export-excel/00RTV87412
  // http://localhost:9191/pru-associate/export-excel/


}
