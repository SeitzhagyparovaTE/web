import { CartService } from './../Cart.service';
import { Product } from './../../Shop';
import { Category_productService } from './../category_product.service';
import { products } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;

  constructor(private category_productService: Category_productService,
    private cartservice: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getProducts():void{
    this.category_productService.getProducts().subscribe(products => this.products = products);
  }

  addToCard(product: Product):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }

}
