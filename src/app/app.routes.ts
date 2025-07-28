import { Routes } from '@angular/router';
import path from 'path';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [


    {path:'' , redirectTo:'products' , pathMatch:'full'},
    {path:'products' , component:ProductsComponent , title:"products"},
    {path:'cart' , component:CartComponent , title:"cart"},
    { path: 'details/:id', component: DetailsComponent, title: 'Product Details' }

];