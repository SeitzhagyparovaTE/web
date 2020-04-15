import { Product } from './../../Shop';
import { Category_productService } from './../category_product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private category_productService: Category_productService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{
    this.category_productService.getProducts().subscribe(products => this.products = products);
  }

  deleteProduct(product: Product):void{
    this.products = this.products.filter(p => p !== product);
    this.category_productService.deleteProduct(product).subscribe();
  }

  // addProduct(id:number,name:string, description:string, price: number, image:string,
  //   color:Array<string>, size: Array<number>, category: number):void{
  //   name = name.trim();
  //   description = description.trim();
  //   image = image.trim();
  //   category =
  //   if(!name || !description || !price || !image || !category){return}
  //   this.category_productService.addProduct({id,name,description,price,image,color,size,category} as Product).subscribe(product => this.products.push(product));
  // }

}
