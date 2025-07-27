import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { ICart } from '../../shared/interfaces/icart';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports:[DatePipe]
})
export class CartComponent implements OnInit {
  carts: ICart[] = [];
  isLoading = true;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getAllCarts().subscribe({
      next: (res) => {
        this.carts = res;
        this.isLoading = false;
        console.log("in cart ");
        
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
