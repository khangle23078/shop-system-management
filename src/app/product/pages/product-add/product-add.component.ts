import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    origin_price: this.fb.control('', [Validators.required]),
    quantity: this.fb.control('', Validators.required),
    desc: this.fb.control('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.productService.create(this.productAddForm.value).subscribe(() => {
      this.message.success('Thêm mới thành công');
      this.router.navigateByUrl('/admin/product');
    });
  }
}
