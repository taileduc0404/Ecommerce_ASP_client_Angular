import { Component, OnInit } from '@angular/core';
import { IProducts } from '../shared/Models/Products';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products:IProducts[];
  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.shopService.getProduct().subscribe(res => {
      this.products=res.data;
    })
  }

 
}
