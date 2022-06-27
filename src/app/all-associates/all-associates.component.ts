
import { Component,Inject, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { OnboardDialogComponent } from '../onboard-dialog/onboard-dialog.component';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-all-associates',
  templateUrl: './all-associates.component.html',
  styleUrls: ['./all-associates.component.scss']
})
export class AllAssociatesComponent implements OnInit {
  title = 'MAT';
  
  displayedColumns: string[] = ['associateName', 'ibmId', 'emailIBM', 'location','role','itExpDate','view/edit','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog,private http:HttpClient,private api:ApiService) {}
  ngOnInit(): void {
    this.getAssociates();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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
      next:(res)=>{
        
        console.log(res);
         this.dataSource=new MatTableDataSource(res);
         this.dataSource.paginator=this.paginator;
         this.dataSource.sort=this.sort;

      },
      error:()=>{
        alert("Error");

      },

    })
  }
  viewAssociate(row:any){
    this.dialog.open(OnboardDialogComponent,{
      width:'50%',
      data:row
    });
  }

  downloadAssociateRecord(row:any){


    // this.api.downloadExcel(row)
    // .subscribe(data=>{
    //   let blob = new Blob([data], { type:'application/octet-stream'});
    //   let url = window.URL.createObjectURL(blob);
    //   let pwa = window.open(url);
    //   if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //       alert( 'Please disable your Pop-up blocker and try again.');
    //   }

    // })
  }
  downloadAssociates(){
    alert("hello");
    // 12234a
    let url="http://localhost:9191/pru-associate/export-excel/00RHV8717"
    window.location.assign(url);
    // this.http.get<any>(url,{responseType: "blob" as 'json'})
    // .subscribe(data=>{
    //   let blob = new Blob([data], { type:'application/octet-stream'});
    //   let url = window.URL.createObjectURL(blob);
    //   let pwa = window.open(url);
    //   if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //       alert( 'Please disable your Pop-up blocker and try again.');
    //   }

    // })

  }

  deleteAssociate(row:any){
   
  }


  // http://localhost:9191/pru-associate/export-excel/00RTV87412
  // http://localhost:9191/pru-associate/export-excel/




}
