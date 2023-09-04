import ProductsList from '@/components/ProductsList';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section>
        {/* @ts-expect-error Server Component */}
        <ProductsList />
      </section>
    </main>
  );
}
