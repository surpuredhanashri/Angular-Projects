export class Products {
  productId: number = 0;
  name: string = '';
  amount: number = 0;

  constructor(productId: number, name: string, amount: number) {
    this.productId = productId;
    this.name = name;
    this.amount = amount;
  }
}
