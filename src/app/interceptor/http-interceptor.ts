import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { CommonConfig } from '../config/common-config';
import { Router } from '@angular/router';



@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
    constructor(private commonService: CommonService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        let isLoggedIn, token;
        isLoggedIn = token = this.commonService?.jwtGloablToken$.getValue();
        
        // for future use of inteceptors : uncomment the below code

        // if (isLoggedIn) {
        //     request = request.clone({
        //         setHeaders: { Authorization: `Bearer ${token ?? ''}` }
        //     });
        // }else if(request.url.includes("authenticate")){
        //     //by-pass this api
        // }else{
        //     alert("!!! login first");
        //     this.router.navigate(['/'])
        // }

        return next.handle(request);
    }
}