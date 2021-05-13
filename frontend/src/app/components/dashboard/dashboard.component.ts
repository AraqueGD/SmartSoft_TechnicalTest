import { Component, OnInit } from '@angular/core';

// Services
import { ApiService } from "../../services/api/api.service";
import { AlertsService } from 'src/app/services/alerts/alerts.service';
// Interface
import { IProducts } from "../../models/products.interface";
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private toast: AlertsService) { }

  products:IProducts[];

  ngOnInit(): void {
    this.api.getProducts().subscribe(data => {
      if (data.length) {
        this.products = data; 
      } else {
        this.toast.showWarning("Not Found Products!", "Create New Product!");
      }
    },
    err => {
      console.error(err)
    }
    )
  }

  editProduct(id) {
    this.router.navigate(["edit-product", id]);
  }

  createProduct() {
    this.router.navigate(["create-product"])
  }

}
