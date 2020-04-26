import { Component, OnInit } from '@angular/core';
import {Category_productService} from "src/app/category_product.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  constructor() { }

  ngOnInit() {

  }

}
