import { Component, OnInit} from '@angular/core';
import { ApiService } from './services/api.service';
import { LoginResponse } from './models/login.model';
import { CommonService } from './services/common.service';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import * as SkillMasterActions from '../app/action/skill-master.action';
import { SkillMasterType } from './models/skill-master.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  jwtToken: string= '';
  constructor(private apiService: ApiService, private commonService: CommonService, 
    private store: Store<AppState>) {}
  ngOnInit(): void {
    this.loadSkills();
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

  loadSkills() {
    this.apiService.getSkillsDetails().subscribe((res: SkillMasterType[])=>{
      this.store.dispatch(new SkillMasterActions.loadSkillMaster(res))
    })

  }

  doLogout=()=>{
    this.commonService.jwtGloablToken$.next('');
    this.jwtToken='';
  }

}
