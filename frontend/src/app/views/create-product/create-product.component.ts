import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category.interface';
import { IProducts } from 'src/app/models/products.interface';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private api:ApiService, private router: Router, private toast: AlertsService) { }

  postForm = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    inventory: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required)
  })

  categorys:ICategory[];


  ngOnInit(): void {
    this.api.getCategorys().subscribe(data => {
      this.categorys = data;
    },
    err => console.log(err)
    )
  }

  createProduct(form:IProducts) {
    if (!form.name || !form.price || !form.inventory || !form.category) {
      this.toast.showError("Complete All Fields", "Error!");
    } else {
      this.api.postProduct(form).subscribe(data => {
        this.toast.showSuccess(`${data.name} Product Created!`, "Success"),
        this.router.navigate(['home']);
      },  
      err => console.log(err)
      )
    }
  }

}