import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/shared/model/response.model';
import { environment } from 'src/environments/environment';
import { IOrder } from '../model/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  API_URL = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  getAll(): Observable<IResponse<IOrder[]>> {
    return this.http.get<IResponse<IOrder[]>>(`${this.API_URL}/order/getAll`);
  }
}
