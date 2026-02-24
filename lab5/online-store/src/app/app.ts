import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CATEGORIES, PRODUCTS } from './data/data';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  categories: Category[] = CATEGORIES;
  products: Product[] = [...PRODUCTS];

  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (!this.selectedCategoryId) {
      return [];
    }

  return this.products.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}