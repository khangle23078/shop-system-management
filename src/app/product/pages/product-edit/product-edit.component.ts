import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../model/product.model';
import { IResponse } from 'src/app/shared/model/response.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productEditForm: FormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    origin_price: this.fb.control('', [Validators.required]),
    quantity: this.fb.control('', Validators.required),
    desc: this.fb.control('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private activedRoute: ActivatedRoute,
    private productService: ProductService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.productService
      .getById(id)
      .subscribe(({ data }: IResponse<IProduct>) => {
        this.productEditForm.patchValue({
          name: data.name,
          origin_price: data.origin_price,
          quantity: data.quantity,
          desc: data.quantity,
        });
      });
  }

  onSubmit(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.productService.edit(id, this.productEditForm.value).subscribe(() => {
      this.message.success('Sửa sản phẩm thành công');
      this.router.navigateByUrl('/admin/product');
    });
  }
}
