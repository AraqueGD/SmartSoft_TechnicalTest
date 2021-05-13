import { Component, OnInit } from '@angular/core';

// Services
import { ApiService } from "../../services/api/api.service";

// Interface
import { IProducts } from "../../models/products.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  products:IProducts[];

  ngOnInit(): void {
    this.api.getProducts().subscribe(data => {
      
    },
    err => console.log(err)
    )
  }
}
