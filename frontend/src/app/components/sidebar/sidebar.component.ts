import { Component, OnInit } from '@angular/core';

// Services
import { ApiService } from "../../services/api/api.service";

// Interface
import { ICategory } from 'src/app/models/category.interface';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { switchMap } from "rxjs/operators";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private toast: AlertsService) { }

  suscribe: Subscription;

  categorys:ICategory[];
  isCreateCategory: boolean = false;

  message:string;

  postForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl("", Validators.required)
  })

  ngOnInit(): void {
    this.api.getCategorys().subscribe(data => {
      if (data) {
        this.categorys = data; 
      } else {
        this.message = "Not Found Categorys"
      }
    },
    err => console.log(err)
    )
    this.suscribe = this.api.resfresh$.subscribe(() => {
      this.api.getCategorys().subscribe(data => {
        this.categorys = data;
      },
      err => console.log(err)
      )
    })
  }

  onDestroy(): void {
    this.suscribe.unsubscribe();
  }

  createCategory(form:ICategory) {
    if (!form.name) {
      this.toast.showError("Complete All Fields!", "Error");
    } else {
      this.api.postCategory(form).subscribe(data => {
        this.toast.showSuccess(`${data.name} Category Created!`, "Succes");
      })
    }
  }

  onProductsForCategory(id) {
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(() => {
      this.router.navigate(["products-category", id]);
    })
  }
}
