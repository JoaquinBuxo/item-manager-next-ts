import { Product } from '@/types';

const fetchProducts = () => {
  return fetch(
    'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json'
  ).then((data) => data.json());
};

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section>
        {products.items.map((product: Product, index: number) => (
          <article key={index}>
            <h2>{product.title}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
