import ProductsList from '@/components/ProductsList';

export default function Home() {
  return (
    <main className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <section className='product-list mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-'>
        {/* @ts-expect-error Server Component */}
        <ProductsList />
      </section>
    </main>
  );
}
