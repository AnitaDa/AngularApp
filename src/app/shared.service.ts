import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Marka } from './marke/marka';
import { Proizvod } from './proizvod';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url="https://localhost:5001/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  constructor(private http:HttpClient) { }

  get(controller:string){
    return this.http.get<any[]>(this.url+controller);
  }
  getById(controller:string,Id:number):Observable<any>{
    return this.http.get(this.url+controller+'/'+Id)
    .pipe(
      catchError(this.errorHandler)
    )}
  add(obj:any,controller:string):any{
    return this.http.post<any>(this.url+controller,obj, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )}
    update(controller:string,Id:number,obj:any){
      return this.http.put<any>(this.url+controller+'/' + Id,JSON.stringify(obj), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }
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

