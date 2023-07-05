import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent {
  categoryAddForm: FormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private message: NzMessageService,
    private router: Router
  ) {}

  onSubmit() {
    this.categoryService.create(this.categoryAddForm.value).subscribe(() => {
      this.message.success('Thêm mới thành công');
      this.router.navigateByUrl('/admin/category');
    });
  }
}
