import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../model/product.model';
import { IResponse } from 'src/app/shared/model/response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  getAll(): Observable<IResponse<IProduct[]>> {
    return this.http.get<IResponse<IProduct[]>>(
      `${this.API_URL}/product/getAll`
    );
  }

  getById(id: string | null): Observable<IResponse<IProduct>> {
    return this.http.get<IResponse<IProduct>>(
      `${this.API_URL}/product/getById/${id}`
    );
  }

  create(data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}/product/create`, data);
  }

  edit(id: string | null, data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      `${this.API_URL}/product/updateById/${id}`,
      data
    );
  }

  deleteById(id: string | null): Observable<IProduct> {
    return this.http.post<IProduct>(
      `${this.API_URL}/product/deleteById/${id}`,
      id
    );
  }
}
