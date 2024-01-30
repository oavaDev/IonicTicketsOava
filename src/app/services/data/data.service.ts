import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {IUserInterface} from "../../Interfaces/user/IUserInterface";
import {IUserLoginInterface} from "../../Interfaces/user/IUserLoginInterface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getUsers(): Observable<IUserInterface>  {
    return this.http.get<IUserInterface>(`${this.apiUrl}/user`).pipe(
      catchError((err) => {
        console.log('API Error: ', err);
        return throwError('Something went wrong!');
      })
    )
  }
  login(user : IUserLoginInterface): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/user/login`,user).pipe(
      catchError((err) => {
        console.log('API Error: ', err);
        return throwError('Something went wrong!');
      })
    )
  }
}
