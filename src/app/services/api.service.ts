import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAssociates(){
    return this.http.get<any>("http://localhost:3000/associates/");
// return this.http.get<any>("http://localhost:9191/pru-associate/get-associate-with-skill-details-by-id/25");
// get single record : http://localhost:9191/pru-associate/get-associate-with-skill-details-by-id/25

return this.http.get<any>("http://localhost:9191/pru-associate/get-associates");
  }

  postAssociate(data:any){
    return this.http.post<any>("http://localhost:9191/pru-associate/save-associate",data);
  }

  // downloadExcel(data:any){
  //   let url="http://localhost:9191/pru-associate/export-excel/"
  //   if(data) url=url+data.ibmId;
  //   return this.http.get<any>(url,{responseType: "blob" as 'json'});
  // }

  downloadExcel(){
    let url="http://localhost:9191/pru-associate/export-excel/"
    return this.http.get<any>(url,{responseType: "blob" as 'json'});
  }
}
