import { Component, OnInit } from '@angular/core';
import { Category_productService } from "src/app/category_product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onlineshop';
  logged = false;

  username = '';
  password = '';
  constructor(private categoryService: Category_productService) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login() {
    this.categoryService.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);
        console.log(res.token)
        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }
}
