import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  onChangeRouteHome() {
    this.router.navigate(["home"]);
  }

  onChangeRouteProfile() {
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(() => {
      this.router.navigate(["profile"]);
    })

  }

  onDestroyToken() {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("id");
    this.router.navigate(["login"]);
  }
}
