import Pagination from '@/components/Pagination';
import ProductsList from '@/components/ProductsList';
import Search from '@/components/Search';

export default function Home() {
  return (
    <main className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <Search />
      <section className='product-list mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-'>
        <ProductsList />
      </section>
      <Pagination />
    </main>
  );
}
