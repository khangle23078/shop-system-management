export interface IProduct {
  _id: string;
  name: string;
  origin_price: string;
  quantity: number;
  desc: string;
  image: {
    public_id: string;
    url: string;
  };
}
