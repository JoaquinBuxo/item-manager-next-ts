import ProductsList from '@/components/ProductsList';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='product-list mt-6 grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4'>
        {/* @ts-expect-error Server Component */}
        <ProductsList />
      </section>
    </main>
  );
}
