import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, Subject } from "rxjs";
// Models Interfaces
import {ILogin} from "../../models/login.interface";
import { IRegister } from "../../models/register.interface";
import {IResponse} from "../../models/response.interface";
import { IProducts } from "../../models/products.interface";
import { ICategory } from 'src/app/models/category.interface';
import { tap } from 'rxjs/operators';
import { IProfile } from 'src/app/models/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:3000/";

  private _refresh$ = new Subject<void>();

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("auth-token")
  })

  status:number;

  constructor(private http: HttpClient) {}

  get resfresh$() {
    return this._refresh$;
  }

  login(form: ILogin): Observable<IResponse> {
    let url_api_signin = this.url + "api/signin";
    return this.http.post<IResponse>(url_api_signin, form);
  }

  register(form: IRegister): Observable<IResponse> {
    let url_api_signup = this.url + "api/signup";
    return this.http.post<IResponse>(url_api_signup, form);
  }

  isLogged(): boolean {
    return !!localStorage.getItem("auth-token");
  }

  getProducts(): Observable<IProducts[]> {
    let url_api_getProducts = this.url + "api/products";
    return this.http.get<IProducts[]>(url_api_getProducts);
  }

  getProduct(id): Observable<IProducts> {
    let url_api_getProduct = this.url + "api/products/" + id;
    return this.http.get<IProducts>(url_api_getProduct);
  }

  getCategorys(): Observable<ICategory[]> {
    let url_api_getCategorys = this.url + "api/category";
    return this.http.get<ICategory[]>(url_api_getCategorys);
  }

  postProduct(form:IProducts): Observable<IProducts> {
    let url_api_createProducts = this.url + "api/products";
    return this.http.post<IProducts>(url_api_createProducts, form);
  }

  putProduct(form:IProducts): Observable<IProducts> {
    let url_api_updateProduct = this.url + "api/products/" + form.id
    return this.http.put<IProducts>(url_api_updateProduct, form);
  }

  deleteProduct(form:IProducts): Observable<IProducts> {
    let url_api_deleteProduct = this.url + "api/products/" + form.id
    return this.http.delete<IProducts>(url_api_deleteProduct);
  }

  postCategory(form:ICategory): Observable<ICategory> {
    let url_api_createCategory = this.url + "api/category";
    return this.http.post<ICategory>(url_api_createCategory, form)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      )
  }

  getProductsForCategory(id: number): Observable<ICategory> {
    let url_api_getProductsForCategory = this.url + "api/category/" + id;
    return this.http.get<ICategory>(url_api_getProductsForCategory);
  }

  getProfile(id: string): Observable<IProfile> {
    let url_api_getProfile = this.url + "api/profile/" + id;
    return this.http.get<IProfile>(url_api_getProfile, {headers: this.headers});
  }

  putProfile(form:IProfile): Observable<IProfile> {
    let url_api_putProfile = this.url + "api/profile/" + localStorage.getItem("id");
    const newProfile = {
      "firstName": form.firstName,
      "lastName": form.lastName,
      "email": form.email,
      "profile": {
        "gender": form.gender,
        "birthday": form.birthday,
        "photo": form.photo,
        "description": form.description
      }
    }
    return this.http.put<IProfile>(url_api_putProfile, newProfile);
  }

  deleteUser(id): Observable<IProfile> {
    let url_api_deleteUser = this.url + "api/users/" + id;
    return this.http.delete<IProfile>(url_api_deleteUser);
  }
}
