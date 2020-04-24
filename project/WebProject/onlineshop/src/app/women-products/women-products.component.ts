import { CartService } from './../Cart.service';
import { Product } from './../../Shop';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category_productService } from '../category_product.service';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location,
    private cartservice: CartService) { }

  ngOnInit() {
    this.getProductsWomen();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getProductsWomen(){
    this.category_productService.getProductsWomen(2).subscribe(products => this.products = products);
  }

  goBack():void{
    this.location.back();
  }

  addToCard(product: Product):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }

}
