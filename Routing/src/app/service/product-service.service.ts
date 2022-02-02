import { Injectable } from '@angular/core';
import { Products } from 'src/app/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  arrProdcuts = [
    new Products(101,"TV",45000),
    new Products(102,"AC",40000),
    new Products(103,"LAPTOP",85000),
    new Products(104,"ALEXA",4000),
  ]

  getAllProducts()
  {
    return this.arrProdcuts;
  }

  getProductsOnID(productId:number){
    return this.arrProdcuts.filter((product)=> product.productId == productId)
  }
  
}
