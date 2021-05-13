import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";

// Interfaces
import { IProducts } from "../../models/products.interface";

// Services
import { ApiService } from 'src/app/services/api/api.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ICategory } from 'src/app/models/category.interface';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private activeRouter: ActivatedRoute, private toast: AlertsService) { }

  products:IProducts;

  editForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    price: new FormControl(""),
    inventory: new FormControl("")
  })

  ngOnInit(): void {
    let productId = this.activeRouter.snapshot.paramMap.get("id");
    this.api.getProduct(productId).subscribe(data => {
      this.products = data;
      this.editForm.setValue({
        "name": this.products.name,
        "price": this.products.price,
        "inventory": this.products.inventory,
        "id": this.products.id
      })
    },
    err => {
      console.log(err)
    }
    )
  }

  updateProduct(form:IProducts) {
    this.api.putProduct(form).subscribe(data=> {
      if (data) {
        this.toast.showSuccess("Update Product!", "Success");
        this.router.navigate(["home"]);
      } else {
        this.toast.showError("Error Update", "¡Error!");
      }
    },
    err => console.log(err)
    )
  }

  delProduct(form:IProducts) {
    this.api.deleteProduct(form).subscribe(data => {
      if (data) {
        this.toast.showSuccess("Product Eliminated!", "Success");
      } else {
        this.toast.showError("Error Update", "¡Error!");
      }
      this.router.navigate(["home"]);
    },
    err => console.log(err)
    )
  }
}
