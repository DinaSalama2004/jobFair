import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../shared/interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService  {

  constructor(private httpClient:HttpClient) { }

getProducts(): Observable<any> {
  return this.httpClient.get(`https://fakestoreapi.com/products`);
}

  getSpecificProduct(productId:number):Observable<any>{

    return this.httpClient.get(`https://fakestoreapi.com/products/${productId}`)

  }
addProduct(product:IProduct){
  return this.httpClient.post(`https://fakestoreapi.com/products/` , product)

}

    updateProduct(productId:string , product:IProduct):Observable<any>{

    return this.httpClient.put(`https://fakestoreapi.com/products/${productId}` ,product
    )

  }


    deleteProduct(productId:string):Observable<any>{

    return this.httpClient.delete(`https://fakestoreapi.com/products/${productId}`)

  }
}
