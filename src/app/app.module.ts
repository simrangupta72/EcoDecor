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
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
  import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule,MatIconModule } from '@angular/material';
// import { DetailsComponent } from './details/details.component';
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
    SignupComponent,
    LoginComponent,
    // DetailsComponent,
    //CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'bath', component: BathComponent},
      {path: 'cart', component: CartComponent},
      {path: 'furniture', component: FurnitureComponent},
      {path: 'bedding', component: BeddingComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent}
      // {path: 'bath/:id', component: BathComponent},
      // {path: 'bath/Curtains', component: BathComponent},
      // {path: 'bath/Tableware', component: BathComponent},
      // {path: 'furniture/:id', component: FurnitureComponent},
      // {path: 'furniture/Tables', component: FurnitureComponent},
      // {path: 'furniture/Ottomans', component: FurnitureComponent},
      // {path: 'bedding/:id', component: BeddingComponent}
      // {path: 'bedding/Sheets', component: BeddingComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
