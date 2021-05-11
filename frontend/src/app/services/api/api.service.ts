import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
// Models Interfaces
import {ILogin} from "../../models/login.interface";
import { IRegister } from "../../models/register.interface";
import {IResponse} from "../../models/response.interface";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:3000/";

  status:number;

  constructor(private http: HttpClient) { }

  login(form: ILogin): Observable<IResponse> {
    let url_api_signin = this.url + "api/signin";
    return this.http.post<IResponse>(url_api_signin, form);
  }

  register(form: IRegister): Observable<IResponse> {
    let url_api_signup = this.url + "api/signup";
    return this.http.post<IResponse>(url_api_signup, form);
  }
}
