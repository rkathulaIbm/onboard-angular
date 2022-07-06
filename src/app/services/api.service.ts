import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonConfig } from '../config/common-config';
import { LoginRequest, LoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private config: CommonConfig) {}
  getAssociates() {
    //    return this.http.get<any>("http://localhost:3000/associates/");
    return this.http.get<any>(
      'http://localhost:9191/pru-associate/get-all-associates'
    );
    // return this.http.get<any>("http://localhost:9191/pru-associate/get-associate-with-skill-details-by-id/25");
    // get single record : http://localhost:9191/pru-associate/get-associate-with-skill-details-by-id/25

    return this.http.get<any>(
      'http://localhost:9191/pru-associate/get-associates'
    );
  }

  postAssociate(data: any) {
    return this.http.post<any>(
      'http://localhost:9191/pru-associate/save-associate',
      data
    );
  }

  // downloadExcel(data:any){
  //   let url="http://localhost:9191/pru-associate/export-excel/"
  //   if(data) url=url+data.ibmId;
  //   return this.http.get<any>(url,{responseType: "blob" as 'json'});
  // }

  downloadExcel() {
    let url = 'http://localhost:9191/pru-associate/export-excel/';
    return this.http.get<any>(url, { responseType: 'blob' as 'json' });
  }

  getSingleAssociateCompleteDetails(data:any){
    return this.http.get<any>("http://localhost:9191/pru-associate/get-associate-with-skill-details-by-id/"+data.associateId);
  
  }
  
  getSkillsDetails(): Observable<any>{
    return this.http.get<any>("http://localhost:9191/pru-skill/get-skill-master");
  
  }
  
  authenticate(formData: LoginRequest): Observable<any> {
    return this.http.post<LoginRequest>(
      `${environment.JWT_API_URL}${this.config.getApiUrl('authenticate')}`,
      formData
    );
  }
}
