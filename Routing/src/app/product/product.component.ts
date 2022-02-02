import { Products } from '../Products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productservice: ProductServiceService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.getAllProducts();

    this.activatedRoute.paramMap.subscribe((param)=>{
    this.idForProductRouting= Number(param.get ('id'));

      if(this.idForProductRouting > 0){
        this.displayBasedOnID();    //http://localhost:4200/products/101
      }

      else{
        this.getAllProducts()     //http:localhost:4200/products                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      }

    });
  }

  arrProducts:Products[] = [] ;     

  getAllProducts(){
    this.arrProducts = this.productservice.getAllProducts();
  }


  displayBasedOnID(){
    this.arrProducts = this.productservice.getProductsOnID(this.idForProductRouting)
  }

  idForProductRouting = 0;

  routeBasedOnID(){
    let strURLForProductsFilterByID = "";

    if(this.idForProductRouting > 0)
    strURLForProductsFilterByID = "products1/"+ this.idForProductRouting;    //Product/105

    this.router.navigate([strURLForProductsFilterByID]);        //http://localhost:4200/products1/105
  }

  displayAll(){
    this.idForProductRouting =0;
    this.arrProducts = this.productservice.getAllProducts();
  }

  

}
