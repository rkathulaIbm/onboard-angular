import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAssociates(){
//    return this.http.get<any>("http://localhost:3000/associates/");
return this.http.get<any>("http://localhost:9191/pru-associate/get-all-associates");
// return this.http.get<any>("http://localhost:9191/pru-associate/get-associate-with-skill-details-by-id/25");
// get single record : http://localhost:9191/pru-associate/get-associate-with-skill-details-by-id/25


  }

getSingleAssociateCompleteDetails(data:any){
  return this.http.get<any>("http://localhost:9191/pru-associate/get-associate-with-skill-details-by-id/"+data.associateId);
  
}

getSkillsDetails(){
  return this.http.get<any>("http://localhost:9191/pru-skill/get-skill-master");
  
}

  postAssociate(data:any){
    return this.http.post<any>("http://localhost:9191/pru-associate/save-associate",data);
  }

  downloadExcel(){
    let url="http://localhost:9191/pru-associate/export-excel/"
    return this.http.get<any>(url,{responseType: "blob" as 'json'});
  }
}
