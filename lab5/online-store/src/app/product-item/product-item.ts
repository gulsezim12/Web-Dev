import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() like = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onLike() {
    this.like.emit(this.product.id);
  }

  onDelete() {
    this.delete.emit(this.product.id);
  }

  shareWhatsApp() {
    const text = encodeURIComponent(`Check this on Kaspi: ${this.product.kaspiUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.kaspiUrl);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }
}