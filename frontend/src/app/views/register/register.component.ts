import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import {Router} from "@angular/router"


// Services
import {ApiService} from "../../services/api/api.service"

// Interfaces
import { IRegister } from 'src/app/models/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
    password: new FormControl("", Validators.required)
  })

  constructor(private api:ApiService, private router: Router) { }

  status: boolean = false;
  message: any = "";

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken() {
    if(localStorage.getItem("auth-token")) {
      this.router.navigate(["home"]);
    }
  }

  onRegister(form:IRegister) {
    this.api.register(form).subscribe(data => {
      if(data.authToken) {
        localStorage.setItem("auth-token", data.authToken);
        this.router.navigate(["home"]);
      }
    },
    err => {
      this.message = err.error.message;
      this.status = true;
    }
    )
  }
}
