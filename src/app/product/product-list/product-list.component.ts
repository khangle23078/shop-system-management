import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { UserService } from 'src/app/core/services/user.service';
import { IResponse } from 'src/app/shared/model/response.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.userService.getUser();
  }

  getProducts(): void {
    this.productService
      .getAll()
      .subscribe(({ data }: IResponse<IProduct[]>) => {
        console.log(data);
        this.products = data;
      });
  }
}
