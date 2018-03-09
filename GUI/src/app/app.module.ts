import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerMyOrdersComponent } from './customer-my-orders/customer-my-orders.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { CustomerPlaceordersComponent } from './customer-placeorders/customer-placeorders.component';

const appRoutes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'customer-my-orders',
    component: CustomerMyOrdersComponent
  },
  {
    path:'product-categories',
    component: ProductCategoriesComponent
  },
  {
    path:'customer-placeorders',
    component:CustomerPlaceordersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CustomerMyOrdersComponent,
    ProductCategoriesComponent,
    CustomerPlaceordersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
