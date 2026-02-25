import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

    private products: Product[] = [
        // Smartphones (categoryId: 1)
{
  id: 101,
  categoryId: 1,
  name: 'Apple iPhone 15 128GB (nanoSIM + eSIM) Pink',
  description: 'Smartphone from Kaspi',
  price: 0,
  rating: 4.8,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
  kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-rozovyi-113137949/?c=750000000',
  likes: 0
},
{
  id: 102,
  categoryId: 1,
  name: 'Samsung Galaxy A56 5G 8/256 Gray',
  description: 'Smartphone from Kaspi',
  price: 0,
  rating: 4.7,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium',
  kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/?c=750000000',
  likes: 0
},
{
  id: 103,
  categoryId: 1,
  name: 'Xiaomi Redmi Note 13 Pro 5G NFC 16/512 Black',
  description: 'Smartphone from Kaspi',
  price: 0,
  rating: 4.6,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
  kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000',
  likes: 0
},
{
  id: 104,
  categoryId: 1,
  name: 'Realme C67 6/128 Black',
  description: 'Smartphone from Kaspi',
  price: 0,
  rating: 4.5,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h39/hc8/85088594591774.png?format=gallery-medium',
  kaspiUrl: 'https://kaspi.kz/shop/p/realme-c67-6-gb-128-gb-chernyi-116417590/?c=750000000',
  likes: 0
},
{
  id: 105,
  categoryId: 1,
  name: 'Apple iPhone 14 128GB (nanoSIM + eSIM) Beige',
  description: 'Smartphone from Kaspi',
  price: 0,
  rating: 4.8,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
  kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-nanosim-esim-bezhevyi-106363144/?c=750000000',
  likes: 0
},

 // Laptops (categoryId: 2)
{
    id: 201, categoryId: 2,
    name: 'MacBook Air',
    description: 'Laptop',
    price: 0,
    rating: 4.9,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
    kaspiUrl: 'PASTE_REAL_KASPI_LINK_HERE',
    likes: 0
  },
  {
    id: 202, categoryId: 2,
    name: 'ASUS VivoBook 15',
    description: 'Laptop',
    price: 0,
    rating: 4.6,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hd3/86542194966558.png?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-bq1364w-15-6-16-gb-ssd-512-gb-win-11-90nb1021-m02090-121433042/?c=750000000',
    likes: 0
  },
  {
    id: 203, categoryId: 2,
    name: 'Lenovo IdeaPad 3',
    description: 'Laptop',
    price: 0,
    rating: 4.6,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    likes: 0
  },
  {
    id: 204, categoryId: 2,
    name: 'HP Pavilion',
    description: 'Laptop',
    price: 0,
    rating: 4.5,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/hb6/82089377726494.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3007ci-15-6-16-gb-ssd-1024-gb-dos-7p438ea-uuq-111968153/?c=750000000',
    likes: 0
  },
  {
    id: 205, categoryId: 2,
    name: 'Acer Aspire 5',
    description: 'Laptop',
    price: 0,
    rating: 4.5,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p76/p0f/55291864.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/acer-aspire-5-spin-14-14-16-gb-ssd-1000-gb-win-11-pro-nx-khter-002w-143152048/?c=750000000',
    likes: 0
  },

  // Headphones (categoryId: 3)
  {
    id: 301, categoryId: 3,
    name: 'AirPods Pro 2',
    description: 'Headphones',
    price: 0,
    rating: 4.8,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    likes: 0
  },
  {
    id: 302, categoryId: 3,
    name: 'JBL Tune 510BT',
    description: 'Headphones',
    price: 0,
    rating: 4.7,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-large',
    kaspiUrl: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
    likes: 0
  },
  {
    id: 303, categoryId: 3,
    name: 'Sony WH-1000XM5',
    description: 'Headphones',
    price: 0,
    rating: 4.9,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
    likes: 0
  },
  {
    id: 304, categoryId: 3,
    name: 'Beats Studio3',
    description: 'Headphones',
    price: 0,
    rating: 4.6,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h7a/63765148139550.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/naushniki-beats-studio-3-wireless-chernyi-4803513/?c=750000000',
    likes: 0
  },
  {
    id: 305, categoryId: 3,
    name: 'Xiaomi Redmi Buds 5',
    description: 'Headphones',
    price: 0,
    rating: 4.5,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hec/84224248938526.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-5-chernyi-113969806/?c=750000000',
    likes: 0
  },

  // Tablets (categoryId: 4)
  {
    id: 401, categoryId: 4,
    name: 'iPad 10.9 2022',
    description: 'Tablet',
    price: 0,
    rating: 4.8,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p7e/p65/85883926.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/chehol-dlja-apple-ipad-11-a16-2025-11-djuim-fioletovyi-151984133/?c=750000000',
    likes: 0
  },
  {
    id: 402, categoryId: 4,
    name: 'Samsung Galaxy Tab S9',
    description: 'Tablet',
    price: 0,
    rating: 4.8,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
    likes: 0
  },
  {
    id: 403, categoryId: 4,
    name: 'Xiaomi Pad 6',
    description: 'Tablet',
    price: 0,
    rating: 4.7,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
    likes: 0
  },
  {
    id: 404, categoryId: 4,
    name: 'iPad Air',
    description: 'Tablet',
    price: 0,
    rating: 4.8,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000',
    likes: 0
  },
  {
    id: 405, categoryId: 4,
    name: 'Lenovo Tab M10',
    description: 'Tablet',
    price: 0,
    rating: 4.5,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h2e/79486075404318.jpg?format=gallery-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/lenovo-tab-m10-tb328fu-zaae0001ru-10-1-djuim-4-gb-64-gb-seryi-109621776/?c=750000000',
    likes: 0
  }


  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
}