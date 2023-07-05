import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../model/category.model';
import { IResponse } from 'src/app/shared/model/response.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(
    private categoryService: CategoryService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAll().subscribe((res: IResponse<ICategory[]>) => {
      this.categories = res.data;
    });
  }

  onDelete(id: string) {
    this.categoryService.deleteById(id).subscribe(() => {
      this.message.success('Xóa danh mục thành công');
      this.getCategories();
    });
  }
}
