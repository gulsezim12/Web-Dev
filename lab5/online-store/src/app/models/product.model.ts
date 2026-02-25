export interface Product {
  id: number;
  categoryId: number;

  name: string;
  description: string;
  price: number;
  rating: number;

  imageUrl: string;
  kaspiUrl: string;

  likes: number; // start from 0
}