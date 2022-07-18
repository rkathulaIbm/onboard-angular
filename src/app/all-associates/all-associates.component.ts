import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnboardDialogComponent } from '../onboard-dialog/onboard-dialog.component';
import { ApiService } from '../services/api.service';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-all-associates',
  templateUrl: './all-associates.component.html',
  styleUrls: ['./all-associates.component.scss'],
})
export class AllAssociatesComponent implements OnInit {
  title = 'MAT';
  today: Date = new Date();
  filterDate: string = '';
  filterVal: string = '';
  displayedColumns: string[] = [
    'associateName',
    'ibmId',
    'emailIBM',
    'location',
    'role',
    'itExpDate',
    'view/edit',
    'action',
  ];
  tableDataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('dateInput', { read: MatInput }) filteredDate: any;
  constructor(
    public route: Router,
    public dialog: MatDialog,
    private http: HttpClient,
    private api: ApiService
  ) {}
  ngOnInit(): void {
    this.getAssociates();
  }

  clearFilters() {
    this.tableDataSource.filter = '';
    this.filteredDate.value = null;
    this.filterVal = '';
    this.getAssociates();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();

    if (this.tableDataSource.paginator) {
      this.tableDataSource.paginator.firstPage();
    }
  }

  formatDate(date: string) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  filterData(val: string) {
    if (val) {
      this.filterDate = this.formatDate(val);
      this.api.getFilterDataByDate(this.filterDate).subscribe({
        next: (res: any) => {
          console.log(res);
          this.tableDataSource = new MatTableDataSource(res);
          this.tableDataSource.paginator = this.paginator;
          this.tableDataSource.sort = this.sort;
        },
        error: () => {
          alert('Error');
        },
      });
    }
  }

  openDialog() {
    this.dialog.open(OnboardDialogComponent, {
      width: '50%',
      height: '70%',
      // data: {
      //   animal: 'panda',
      // },
    });
  }

  getAssociates() {
    this.api.getAssociates().subscribe({
      next: (res: any) => {
        console.log(res);
        this.tableDataSource = new MatTableDataSource(res);
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
      },
      error: () => {
        alert('Error');
      },
    });
  }

  editAssociateDetails(row: any) {
    this.route.navigate(['/editAssociate/' + row.associateId]);
  }

  viewAssociate(row: any) {
    this.dialog.open(OnboardDialogComponent, {
      width: '50%',
      data: row,
    });
  }

  downloadAllAssociatesDetails() {
    let url = 'http://localhost:9191/pru-associate/export-excel/';
    window.location.assign(url);
  }

  downloadIndividualAssociateDetails(data: any) {
    // 12234a
    let url = 'http://localhost:9191/pru-associate/export-excel/' + data.ibmId;
    window.location.assign(url);
  }

  deleteAssociate(row: any) {}

  // http://localhost:9191/pru-associate/export-excel/00RTV87412
  // http://localhost:9191/pru-associate/export-excel/
}
