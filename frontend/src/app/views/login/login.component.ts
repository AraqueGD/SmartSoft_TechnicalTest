import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { Router } from "@angular/router";

// Models Interfaces
import { ILogin } from "../../models/login.interface";

// Services
import { ApiService } from "../../services/api/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken() {
    if(localStorage.getItem("auth-token")) {
      this.router.navigate(["home"]);
    }
  }

  status: boolean = false;
  message: any = "";

  onLogin(form:ILogin) {
    this.api.login(form).subscribe(data => {
      console.log(data.authToken);
      if(data.authToken) {
        localStorage.setItem("auth-token", data.authToken);
        localStorage.setItem("id", data.id);
        this.router.navigate(["home"]);
      }
    },
    err => {
      console.log(err.error.message)
      this.message = err.error.message;
      this.status = true;
    }
    )
  }

  onChangeRoute() {
    this.router.navigate(["register"]);
  }

}
