import { Component,Inject, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OnboardDialogComponent } from './onboard-dialog/onboard-dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import { DialogComponent } from './dialog/dialog.component';
import { LoginResponse } from './models/login.model';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  jwtToken: string= '';
  constructor(private apiService: ApiService, private commonService: CommonService) {}
  ngOnInit(): void {
    
  }

  doLogin=()=>{
    const loginForm={
      username:'foo',
      password:'foo'
    } 

    this.apiService.authenticate(loginForm).subscribe((res: LoginResponse)=>{
      console.log(res.jwt)
      this.commonService.jwtGloablToken$.next(res.jwt ?? '')
    }, (err)=>{
      console.log(err)
    }, ()=>{
      this.jwtToken= this.commonService.jwtGloablToken$.getValue();
    })
  }


  doLogout=()=>{

    this.commonService.jwtGloablToken$.next('');
    this.jwtToken='';
  }

}
