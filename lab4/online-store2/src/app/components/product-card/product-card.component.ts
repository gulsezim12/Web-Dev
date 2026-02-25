import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  currentIndex = 0;

  get currentImage(): string {
    return this.product.images?.length ? this.product.images[this.currentIndex] : this.product.image;
  }

  selectImage(i: number) {
    this.currentIndex = i;
  }

  get whatsappShareUrl(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  get telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }
  
  get stars(): number[] {
  return Array(Math.floor(this.product.rating)).fill(0);
 }

  get emptyStars(): number[] {
  return Array(5 - Math.floor(this.product.rating)).fill(0);
 }
}