import { CartService } from './../Cart.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {

  items =[];

  constructor(
    private cartservice: CartService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.items = this.cartservice.getItems();
  }

  clearCart(){
    this.items.length = 0;
  }
  goBack(){
    this.location.back();
  }

  buyItems(){
    alert("You order is received");
    this.items.length = 0;
  }

}
