import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.entity';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-bedding',
  templateUrl: './bedding.component.html',
  styleUrls: ['./bedding.component.css']
})
export class BeddingComponent implements OnInit {

  private products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

}
