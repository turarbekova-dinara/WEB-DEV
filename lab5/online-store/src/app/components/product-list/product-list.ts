import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  @Input() products: Product[] = [];

  @Output() delete = new EventEmitter<number>();
  
  removeProduct(id: number) {
    this.delete.emit(id);
  }
}