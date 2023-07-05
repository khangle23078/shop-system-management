import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from 'src/app/shared/model/response.model';
import { environment } from 'src/environments/enviroment';
import { Observable } from 'rxjs';
import { ICategory } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API_URL = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  getAll(): Observable<IResponse<ICategory[]>> {
    return this.http.get<IResponse<ICategory[]>>(
      `${this.API_URL}/category/getAll`
    );
  }

  getById(id: string | null): Observable<IResponse<ICategory>> {
    return this.http.get<IResponse<ICategory>>(
      `${this.API_URL}/category/getById/${id}`
    );
  }

  editById(id: string | null, data: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(
      `${this.API_URL}/category/updateById/${id}`,
      data
    );
  }
}
