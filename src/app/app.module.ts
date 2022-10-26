import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ProductService } from "./service/productService";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FontAwesomeModule,
    MatTabsModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
