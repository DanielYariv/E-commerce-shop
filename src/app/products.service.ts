import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [
    {
      ProductID: 1,
      Name: "Men's Casual Shirt",
      Description: 'Comfortable and stylish, perfect for casual outings.',
      Price: 25.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=1&mens-shirt',
      stars: 5,
    },
    {
      ProductID: 2,
      Name: "Men's Formal Shirt",
      Description: 'Sharply tailored for professional excellence.',
      Price: 45.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=2&mens-shirt',
      stars: 4,
    },
    {
      ProductID: 3,
      Name: "Men's Casual Pants",
      Description: 'Relaxed fit with a modern look.',
      Price: 35.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=3&mens-pants',
      stars: 3,
    },
    {
      ProductID: 4,
      Name: "Men's Jeans",
      Description: 'Durable denim with timeless style.',
      Price: 55.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=4&mens-jeans',
      stars: 3,
    },
    {
      ProductID: 5,
      Name: "Men's Formal Pants",
      Description: 'Perfect for corporate and social settings.',
      Price: 49.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=5&mens-pants',
      stars: 5,
    },
    {
      ProductID: 6,
      Name: "Men's Khaki Pants",
      Description: 'Best for outdoor activities and casual outings.',
      Price: 50.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=6&mens-pants',
      stars: 5,
    },
    {
      ProductID: 7,
      Name: "Men's Printed Shirt",
      Description: 'Adds a touch of fun to any wardrobe.',
      Price: 30.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=7&mens-shirt',
      stars: 4,
    },
    {
      ProductID: 8,
      Name: "Men's Office Shirt",
      Description: 'Crisp and clean cut for a sharp appearance.',
      Price: 35.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=8&mens-shirt',
      stars: 2,
    },
    {
      ProductID: 9,
      Name: "Men's Linen Shirt",
      Description: 'Light and airy, perfect for summer days.',
      Price: 45.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=9&mens-shirt',
      stars: 3,
    },
    {
      ProductID: 10,
      Name: "Men's Polo Shirt",
      Description: 'Classic comfort and timeless style.',
      Price: 42.99,
      Category: 'Clothing',
      SubCategory: 'Men',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=10&mens-shirt',
      stars: 5,
    },

    {
      ProductID: 11,
      Name: "Women's Casual Shirt",
      Description: 'Light and breezy, perfect for casual wear.',
      Price: 20.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=11&womens-shirt',
      stars: 3,
    },
    {
      ProductID: 12,
      Name: "Women's Formal Shirt",
      Description: 'Office-ready shirts that combine comfort with style.',
      Price: 40.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=12&womens-shirt',
      stars: 2,
    },
    {
      ProductID: 13,
      Name: "Women's Chiffon Shirt",
      Description: 'Chic and light, offering a flattering fit.',
      Price: 35.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=13&womens-shirt',
      stars: 4,
    },
    {
      ProductID: 14,
      Name: "Women's Silk Blouse",
      Description: 'Elegant silk that feels luxurious against the skin.',
      Price: 55.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=14&womens-shirt',
      stars: 4,
    },
    {
      ProductID: 15,
      Name: "Women's Flannel Shirt",
      Description: 'Warm and cozy, perfect for the chilly seasons.',
      Price: 25.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=15&womens-shirt',
      stars: 3,
    },
    {
      ProductID: 16,
      Name: "Women's Jeans Pants",
      Description: 'Stylish jeans tailored for the modern woman.',
      Price: 55.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=16&womens-jeans',
      stars: 5,
    },
    {
      ProductID: 17,
      Name: "Women's Casual Pants",
      Description: 'Combine comfort and style with these pants.',
      Price: 45.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=17&womens-pants',
      stars: 4,
    },
    {
      ProductID: 18,
      Name: "Women's Chinos",
      Description: 'Perfectly versatile chinos for any occasion.',
      Price: 42.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=18&womens-pants',
      stars: 2,
    },
    {
      ProductID: 19,
      Name: "Women's Formal Pants",
      Description: 'Formal pants that enhance your office look.',
      Price: 49.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=19&womens-pants',
      stars: 3,
    },
    {
      ProductID: 20,
      Name: "Women's Capri Pants",
      Description: 'Stylish and comfortable for all-day wear.',
      Price: 39.99,
      Category: 'Clothing',
      SubCategory: 'Women',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=20&womens-pants',
      stars: 3,
    },

    {
      ProductID: 21,
      Name: "Kids' T-Shirt",
      Description: 'Fun and colorful t-shirts for every child.',
      Price: 15.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=21&kids-shirt',
      stars: 3,
    },
    {
      ProductID: 22,
      Name: "Kids' Polo Shirt",
      Description: 'Classic polo shirts for formal and casual occasions.',
      Price: 18.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=22&kids-shirt',
      stars: 5,
    },
    {
      ProductID: 23,
      Name: "Kids' Graphic Tee",
      Description: 'Expressive graphic tees for the young and free spirited.',
      Price: 12.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=23&kids-shirt',
      stars: 4,
    },
    {
      ProductID: 24,
      Name: "Kids' Hooded Shirt",
      Description: 'Cozy hooded shirts for cool weather.',
      Price: 20.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=24&kids-shirt',
      stars: 2,
    },
    {
      ProductID: 25,
      Name: "Kids' Button-Up Shirt",
      Description: 'Smart button-up shirts for every young gentleman and lady.',
      Price: 22.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=25&kids-shirt',
      stars: 4,
    },
    {
      ProductID: 26,
      Name: "Kids' Jeans",
      Description: 'Durable and stylish jeans, perfect for active kids.',
      Price: 29.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=26&kids-jeans',
      stars: 5,
    },
    {
      ProductID: 27,
      Name: "Kids' Cargo Pants",
      Description: 'Roomy cargo pants for all their treasures.',
      Price: 24.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=27&kids-pants',
      stars: 3,
    },
    {
      ProductID: 28,
      Name: "Kids' Chinos",
      Description: 'Chinos that keep up with their adventures.',
      Price: 21.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=28&kids-pants',
      stars: 3,
    },
    {
      ProductID: 29,
      Name: "Kids' Joggers",
      Description: 'Comfortable joggers for playtime and downtime.',
      Price: 19.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=29&kids-pants',
      stars: 4,
    },
    {
      ProductID: 30,
      Name: "Kids' Formal Pants",
      Description: 'Formal pants for special occasions.',
      Price: 25.99,
      Category: 'Clothing',
      SubCategory: 'Kids',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=30&kids-pants',
      stars: 5,
    },

    {
      ProductID: 31,
      Name: 'Apple iPhone 13',
      Description: '5.4-inch display, A15 Bionic chip, dual-camera system.',
      Price: 699.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=31&iphone',
      stars: 3,
    },
    {
      ProductID: 32,
      Name: 'Apple iPhone 13 Mini',
      Description: 'Compact and powerful with a 5.4-inch screen and A15 chip.',
      Price: 599.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=32&iphone',
      stars: 4,
    },
    {
      ProductID: 33,
      Name: 'Apple iPad Air',
      Description: '10.9-inch Liquid Retina display, A14 Bionic chip.',
      Price: 599.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=33&ipad',
      stars: 2,
    },
    {
      ProductID: 34,
      Name: 'Apple iPad Pro',
      Description:
        '11-inch Liquid Retina XDR display, M1 chip, best for professionals.',
      Price: 799.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=34&ipad-pro',
      stars: 4,
    },
    {
      ProductID: 35,
      Name: 'Apple Watch Series 7',
      Description: 'Most advanced health monitor on a smartwatch.',
      Price: 399.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=35&apple-watch',
      stars: 5,
    },
    {
      ProductID: 36,
      Name: 'Apple MacBook Pro 14',
      Description: 'With M1 Pro chip, for those who defy limits.',
      Price: 1999.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=36&macbook-pro',
      stars: 2,
    },
    {
      ProductID: 37,
      Name: 'Apple MacBook Air',
      Description: 'M1 chip, 13-inch Retina display, 18 hours of battery life.',
      Price: 999.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=37&macbook-air',
      stars: 4,
    },
    {
      ProductID: 38,
      Name: 'Apple AirPods Pro',
      Description: 'With MagSafe charging case, noise cancellation.',
      Price: 249.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=38&airpods',
      stars: 5,
    },
    {
      ProductID: 39,
      Name: 'Apple Mac Mini',
      Description: 'M1 chip, small in size but big on performance.',
      Price: 699.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=39&mac-mini',
      stars: 2,
    },
    {
      ProductID: 40,
      Name: 'Apple iMac 24',
      Description: '4.5K Retina display, M1 chip, in 7 vibrant colors.',
      Price: 1299.0,
      Category: 'Electronics',
      SubCategory: 'Apple',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=40&imac',
      stars: 4,
    },

    {
      ProductID: 41,
      Name: 'Samsung Galaxy S21',
      Description: '8K video recording at 24 fps, 64 MP high resolution.',
      Price: 799.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=41&galaxy-s21',
      stars: 1,
    },
    {
      ProductID: 42,
      Name: 'Google Pixel 6',
      Description: 'Tensor chip, 50 MP wide and 12 MP ultrawide cameras.',
      Price: 599.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=42&pixel-6',
      stars: 4,
    },
    {
      ProductID: 43,
      Name: 'OnePlus 9 Pro',
      Description: 'Hasselblad Camera for Mobile, 120 Hz Fluid Display.',
      Price: 969.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=43&oneplus-9',
      stars: 5,
    },
    {
      ProductID: 44,
      Name: 'Sony Xperia 1 III',
      Description: '4K HDR OLED display, triple camera system.',
      Price: 1299.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=44&xperia-1',
      stars: 4,
    },
    {
      ProductID: 45,
      Name: 'Samsung Galaxy Tab S7',
      Description: '11-inch display, 120Hz, S Pen included.',
      Price: 649.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=45&galaxy-tab',
      stars: 3,
    },
    {
      ProductID: 46,
      Name: 'Samsung Galaxy Watch 4',
      Description: 'The first smartwatch with Wear OS Powered by Samsung.',
      Price: 249.99,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=46&galaxy-watch',
      stars: 4,
    },
    {
      ProductID: 47,
      Name: 'Google Pixel 5a',
      Description: '5G capable, ultra-wide lens.',
      Price: 449.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=47&pixel-5a',
      stars: 5,
    },
    {
      ProductID: 48,
      Name: 'Huawei P40 Pro',
      Description: '50 MP Ultra Vision Camera, 5G capability.',
      Price: 799.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=48&huawei-p40',
      stars: 4,
    },
    {
      ProductID: 49,
      Name: 'Xiaomi Mi 11',
      Description: '108 MP triple camera, 120 Hz AMOLED display.',
      Price: 749.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL: 'https://source.unsplash.com/random/300x300?sig=49&xiaomi-mi',
      stars: 5,
    },
    {
      ProductID: 50,
      Name: 'Motorola Edge Plus',
      Description: '108 MP sensor, largest battery in its class.',
      Price: 999.0,
      Category: 'Electronics',
      SubCategory: 'Android',
      ImageURL:
        'https://source.unsplash.com/random/300x300?sig=50&motorola-edge',
      stars: 4,
    },
  ];

  getProducts() {
    return this.products;
  }

  getBestSellers() {
    return this.products.filter((product) => product.stars === 5);
  }

  //expect to get Women/Men/Kids/Electronics
  getByCategory(category: string) {
    return this.products.filter((product) => product.Category === category);
  }

  //expect to get Women/Men/Kids and Shirts/Pants or Electronics and Apple/Android
  getByCategoryAndSubCategory(category: string | null, subCategory: string) {
    return this.products.filter(
      (product) =>
        product.Category === category && product?.SubCategory === subCategory
    );
  }
}
