import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.entity';
import { ProductService } from 'src/app/services/product.service'
@Component({
  selector: 'app-bath',
  templateUrl: './bath.component.html',
  styleUrls: ['./bath.component.css']
})
export class BathComponent implements OnInit {
  private products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

}