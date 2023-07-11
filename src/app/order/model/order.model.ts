import { IProduct } from 'src/app/product/model/product.model';

export interface IOrder {
  _id: string;
  full_name: string;
  address: string;
  phone_number: string;
  products: IProduct[];
  product_count: number;
  status: 'pending' | 'reject' | 'success';
  total_price: number;
}
