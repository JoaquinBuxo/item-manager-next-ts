export type Product = {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
};

export type Products = Product[];

export type ProductsResponse = {
  items: Product[];
};
