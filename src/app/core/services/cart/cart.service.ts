import { HttpClient } from '@angular/common/http';
import { Inject, Injectable , PLATFORM_ID, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { platform } from 'node:os';
import { isPlatformBrowser } from '@angular/common';
import { ICart } from '../../../shared/interfaces/icart';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private readonly httpClient: HttpClient  ,  @Inject(PLATFORM_ID) private platformId: Object ) { 

  }




 









  getAllCarts(): Observable<any> {
    return this.httpClient.get(`https://fakestoreapi.com/carts`

    );

  }

  getSingleCart(cartId:string): Observable<any> {
    return this.httpClient.get(`https://fakestoreapi.com/carts/${cartId}`

    );

  }

  addNewCart(cartId:number , cart:ICart): Observable<any> {
    return this.httpClient.post(`https://fakestoreapi.com/carts/${cartId}` , cart

    );

  }
  updateCart(cartId:number , cart:ICart): Observable<any> {
    return this.httpClient.put(`https://fakestoreapi.com/carts/${cartId}` , cart

    );

  }

  deleteCart(cartId:string): Observable<any> {
    return this.httpClient.delete(`https://fakestoreapi.com/carts/${cartId}`

    );

  }
 




}

