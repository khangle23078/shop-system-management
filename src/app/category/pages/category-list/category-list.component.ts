import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../model/category.model';
import { IResponse } from 'src/app/shared/model/response.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService
      .getAll()
      .subscribe(({ data }: IResponse<ICategory[]>) => {
        this.categories = data;
      });
  }
}
