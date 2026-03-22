import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CATEGORIES, PRODUCTS } from './data/data';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  categories: Category[] = CATEGORIES;
  products: Product[] = PRODUCTS;

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.products.filter(
      p => p.categoryId === this.selectedCategory!.id
    );
  }

}