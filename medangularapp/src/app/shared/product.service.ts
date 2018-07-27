declare var require: any;
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Product } from './product.model';
import * as envdata from '../../../env.json';

declare var myinstanceurlprod:any;
//declare var myinstanceurl:any;

@Injectable()
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  
  instanceurlprod='';
  constructor(private http: HttpClient) {
  
  // var envdata = require('../../../../env.json');
    const myObjStr = JSON.stringify(envdata);
   const myinstanceurl=JSON.parse(myObjStr).instanceurlcors;
  //const myinstanceurl="http://localhost:3000";
  
   console.log("myinstanceurl is:::"+ myinstanceurl);
     const myinstanceurlprod=myinstanceurl+'/products';
     this.instanceurlprod=myinstanceurlprod;
    console.log("instanceurlprod:::"+this.instanceurlprod);
   }

 postProduct(prod: Product) {
    return this.http.post(this.instanceurlprod, prod);
  }

  getProductList() {
    
    return this.http.get(this.instanceurlprod);
  }

  putProduct(prod: Product) {
    console.log("prodid"+prod._id);
    return this.http.put(this.instanceurlprod + `/${prod._id}`, prod);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.instanceurlprod + `/${_id}`);
  }

}
