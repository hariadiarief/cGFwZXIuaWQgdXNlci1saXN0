import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { IUser } from "../types/user.types";

const base_url = 'https://jsonplaceholder.typicode.com'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${base_url}/users`).pipe(
      catchError(error => {
        throw error
      })
    )
  }

  getUserDetail(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${base_url}/users/${id}`).pipe(
      catchError(error => {
        throw error
      })
    )
  }
}
