import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category.interface';
import { IProducts } from 'src/app/models/products.interface';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private activeRouter: ActivatedRoute, private toast: AlertsService) { }

  products: IProducts[];
  category: ICategory;

  ngOnInit(): void {
      let categoryId = this.activeRouter.snapshot.paramMap.get("id")
      let id = parseInt(categoryId);
      this.api.getProductsForCategory(id).subscribe(data => {
        if (data.products.length) {
          this.products = data.products;
          this.category = data;
        } else {
          this.toast.showWarning("Not Found Products for Category","Info!");
        }
        
      },
      err => console.log(err)
      )
  }

  editProduct(id) {
    this.router.navigate(["edit-product", id]);
  }

  createProduct() {
    this.router.navigate(["create-product"]);
  }
}
