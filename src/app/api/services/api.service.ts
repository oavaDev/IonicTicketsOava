import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {IUserLoginInterface} from "../../Interfaces/user/IUserLoginInterface";
import {IUserRegisterInterface} from "../../Interfaces/user/IUserRegisterInterface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  login(user : IUserLoginInterface): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/auth/login`,user).pipe(
      catchError((err) => {
        return throwError(() => new Error('Something went wrong, Check your credentials!'));
      })
    )
  }
  register(user : IUserRegisterInterface): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`,user).pipe(
      catchError((err) => {
        return throwError(() => new Error("Something went wrong, User couldn't be created!"));
      })
    )
  }
}
