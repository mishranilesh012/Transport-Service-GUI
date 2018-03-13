import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerMyOrdersComponent } from './customer-my-orders/customer-my-orders.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { CustomerPlaceordersComponent } from './customer-placeorders/customer-placeorders.component';
import { LoginComponent } from './login/login.component';
import { ShipperRegisterComponent } from './shipper-register/shipper-register.component';
import { CarrierRegisterComponent } from './carrier-register/carrier-register.component';
import { CustViewQuotationComponent } from './cust-view-quotation/cust-view-quotation.component';
import { CarrierDashboardComponent } from './carrier-dashboard/carrier-dashboard.component';
import { CarrierMyordersComponent } from './carrier-myorders/carrier-myorders.component';
import { CarrierAddvehicleComponent } from './carrier-addvehicle/carrier-addvehicle.component';

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
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'shipper-register',
    component:ShipperRegisterComponent
  },
  {
    path:'carrier-register',
    component: CarrierRegisterComponent
  },
  {
    path:'cust-view-quotation',
    component: CustViewQuotationComponent
  },
  {
    path:'carrier-dashboard',
    component: CarrierDashboardComponent
  },
  {
    path:'carrier-myorders',
    component: CarrierMyordersComponent
  },
  {
    path:'carrier-addvehicle',
    component: CarrierAddvehicleComponent
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
    CustomerPlaceordersComponent,
    LoginComponent,
    ShipperRegisterComponent,
    CarrierRegisterComponent,
    CustViewQuotationComponent,
    CarrierDashboardComponent,
    CarrierMyordersComponent,
    CarrierAddvehicleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
