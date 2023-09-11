import React from 'react';
import Filters from '@/components/Filters';
import Pagination from '@/components/Pagination';
import ProductsList from '@/components/Products/ProductsList';
import Skeleton from '@/components/status/Skeleton';
import ErrorFallback from '@/components/status/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

export default function Home() {
  return (
    <main className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <Filters />
      <section className='product-list mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-'>
        <React.Suspense fallback={<Skeleton />}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <ProductsList />
          </ErrorBoundary>
        </React.Suspense>
      </section>
      <Pagination />
    </main>
  );
}
