import { Component, inject, OnInit } from '@angular/core';
import { GetProductsService } from '../../core/services/get Products/get-products.service';
import { IProduct } from '../../shared/interfaces/iproduct';
import { ActivatedRoute , RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-details',
  imports: [ RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private readonly productsService = inject(GetProductsService)
  private readonly activatedRoute = inject(ActivatedRoute)
  productDtails: IProduct | null = null
  prodId: number=0
  starIcons: any;


  ngOnInit(): void {

    this.getProductId();
    this.getProductDetails();

  }




 

// methods apis 
  getProductId() {

    this.activatedRoute.paramMap.subscribe(
      {
        next: (res) => {
        const   prodID:string = res.get('id')!;

        this.prodId =Number(prodID)
          console.log("product id", res.get('id'));

        },
        error: (err) => {
          console.log("error fetch id ", err);

        }
      }
    )
  }


  getProductDetails(): void {

    this.productsService.getSpecificProduct(this.prodId).subscribe(
      {
        next: (res) => {
          this.productDtails = res

        },
        error: (err) => {
          console.log("error when get product details", err);
        }
      }
    )
  }



// addToCard(ID:string){
// this.cartService.addProductToCart(ID).subscribe(
//   {
//     next: (res) => {
   
//       this.toastr.success(res.message)
      
//   }, 
//   error:(err)=>{
//     console.log("error addProductToCart " , err);
    
//   }
//   }
// )


// }
}
