import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../../shared/interfaces/iproduct';
import { GetProductsService } from '../../../core/services/get Products/get-products.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  products: IProduct[] = [];

  constructor(private productService: GetProductsService) {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id.toString()).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
        console.log(`Product ${id} deleted`);
      });
    }
  }

  // editProduct(id: number) {
  //   this.router.navigate(['/edit', id]);
  // }
}
