import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IResponse } from 'src/app/shared/model/response.model';
import { ICategory } from '../../model/category.model';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  categoryEditForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private activedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.categoryService
      .getById(id)
      .subscribe(({ data }: IResponse<ICategory>) => {
        this.categoryEditForm.patchValue({
          name: data.name,
        });
      });
  }

  onSubmit(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');
  }
}
