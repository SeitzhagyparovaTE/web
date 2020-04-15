import { CartService } from './../Cart.service';
import { MenProductsComponent } from './../men-products/men-products.component';
import { Product } from './../../Shop';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from '../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-men-product-detail',
  templateUrl: './men-product-detail.component.html',
  styleUrls: ['./men-product-detail.component.css']
})
export class MenProductDetailComponent implements OnInit {

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location,
    private cartservice: CartService) { }

  product: Product;

  ngOnInit() {
    this.getProduct();
  }

  getProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.category_productService.getProduct(id).subscribe(product => this.product = product);
  }

  goBack(){
    this.location.back();
  }

  addToCard(product: Product):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }
}
