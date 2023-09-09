import { ProductsResponse } from '@/types/products';

const mockProducts: ProductsResponse = {
  items: [
    {
      title: 'Test Product 1',
      description: 'This is a test product 1',
      price: '10',
      email: 'mail1@example.com',
      image: 'https://example.com/image1.jpg',
    },
    {
      title: 'Test Product 2',
      description: 'This is a test product 2',
      price: '20',
      email: 'mail2@example.com',
      image: 'https://example.com/image2.jpg',
    },
  ],
};

export default mockProducts;
