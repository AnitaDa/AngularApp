import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Marka } from './marka';
@Injectable({
  providedIn: 'root'
})
export class MarkaService {
  url="https://localhost:5001/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  constructor(private http:HttpClient) { }

  get(controller:string){
    return this.http.get<any[]>(this.url+controller);
  }
  add(obj:any,controller:string): Observable<any> {
    return this.http.post<any>(this.url+controller,obj, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )}
  delete(Id:number,controller:string){
    return this.http.delete<any>(this.url+controller+'/'+Id).pipe(
      tap(pp=>console.log('Delete with id=${Id}')),
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

