import { Component, OnInit, signal } from '@angular/core';

import { Router } from '@angular/router';
import { IProduct } from '../../shared/interfaces/iproduct';
import { GetProductsService } from '../../core/services/get Products/get-products.service';
import { CardComponent } from "../card/card/card.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [CardComponent ,ReactiveFormsModule],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = []; // fetched from API
  isLoading = false;
  error ='';
  successMsg = '';
  productForm: FormGroup;
  isModalOpen = false;


  
  constructor(private formBuilder: FormBuilder, private productService: GetProductsService, private router: Router) {
    this.productForm = this.formBuilder.group({
      id: [0], // fixed value
      title: ['', Validators.required],
      price: [0.1, [Validators.required, Validators.min(0.01)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['http://example.com', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]]
    });

    
  }

  ngOnInit(): void {
    this.getProducts();
  }
  openModal() {
    this.isModalOpen = true;
    this.productForm.reset({
      id: 0,
      title: '',
      price: 0.0,
      description: '',
      category: '',
      image: 'http://example.com'
    });
  }
  closeModal() {
    this.isModalOpen = false;
  }

  submitProduct() {
    if (this.productForm.invalid) return;

    this.isLoading=true;
    const productData = this.productForm.value;

    this.productService.addProduct(productData).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
        this.isLoading=false;
        this.getProducts()
        this.closeModal();
      },
      error: (err) => {
        console.error('Error adding product:', err);
        this.isLoading=false;
      }
    });}

  getProducts(): void {
    this.isLoading=true;
    this.productService.getProducts().subscribe({
      next: (data: IProduct[]) => {
        this.products = data;
        this.isLoading=false;
      },
      error: (err) => {
        this.error='Failed to fetch products';
        this.isLoading=false;
      }
    });
  }


  addProduct(product:IProduct){
    this.productService.addProduct(product).subscribe(
      {
        next: (data) => {
      
          this.isLoading=false;
        },
      }
    )
  }

  // deleteProduct(id: number): void {
  //   if (confirm('Are you sure you want to delete this product?')) {
  //     this.productService.deleteProduct(id.toString()).subscribe({
  //       next: () => {
  //         this.products = this.products.filter(p => p.id !== id);
  //         this.successMsg = 'Product deleted successfully!';
  //         setTimeout(() => this.successMsg = '', 3000);
  //       },
  //       error: () => {
  //         this.error = 'Error deleting product.';
  //       }
  //     });
  //   }
  // }

  editProduct(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
