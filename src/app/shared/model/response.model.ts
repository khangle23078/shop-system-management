export interface IResponse<T> {
  data: T;
  error: boolean;
  status: number;
}
