import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}