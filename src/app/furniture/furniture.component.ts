import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.entity';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  private products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

}
