import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.products.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }

  handleLike(id: number) {
    this.products = this.products.map(p =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    );
  }

  handleDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}