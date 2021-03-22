import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SendingmailService {
  baseURL: string = "http://localhost:8080/";

  constructor( private http:HttpClient,private router:Router) { }

  sendData(urlPrefix: string, query: any): Observable<any> {
    const url =this.baseURL+urlPrefix;
    return this.http.post(url,query).pipe(
      catchError(this.handleError)
    )
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error.msg;
    }
    return throwError(errorMessage);
  }  
}
