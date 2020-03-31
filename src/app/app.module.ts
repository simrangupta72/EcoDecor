import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderModule } from 'angular-image-slider';
import { CardComponent } from './card/card.component';
import {LogoComponent} from './logo/logo.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';
import { FooterComponent } from './footer/footer.component';
import { BathComponent } from './bath/bath.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
// import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './services/product.service';
import { FurnitureComponent } from './furniture/furniture.component';
import { BeddingComponent } from './bedding/bedding.component';
//import { CartItemComponent } from './cart/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    CardComponent,
    OurStoryComponent,
    FlipCardsComponent,
    FooterComponent,
    BathComponent,
    HomepageComponent,
    // ProductItemComponent,
    CartComponent,
    FurnitureComponent,
    BeddingComponent,
    //CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'bath', component: BathComponent},
      {path: 'cart', component: CartComponent},
      {path: 'furniture', component: FurnitureComponent},
      {path: 'bedding', component: BeddingComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
