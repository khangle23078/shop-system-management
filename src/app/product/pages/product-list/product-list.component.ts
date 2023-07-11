import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { IResponse } from 'src/app/shared/model/response.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IProduct } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  constructor(
    private productService: ProductService,
    private userService: UserService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.userService.getUser();
  }

  getProducts(): void {
    this.productService
      .getAll()
      .subscribe(({ data }: IResponse<IProduct[]>) => {
        this.products = data;
      });
  }

  onDelete(id: string | null) {
    this.productService.deleteById(id).subscribe(() => {
      this.message.success('Xóa thành công');
      this.getProducts();
    });
  }
}
