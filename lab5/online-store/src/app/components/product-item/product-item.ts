import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {

  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  selectedImage!: string;

  ngOnInit() {
    if (this.product.images && this.product.images.length > 0) {
      this.selectedImage = this.product.images[0];
    } else {
      this.selectedImage = this.product.image;
    }
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }

  like() {
    this.product.likes++;  
  }

  deleteProduct() {
    this.delete.emit(this.product.id); 
  }

}
