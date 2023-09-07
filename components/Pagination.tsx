'use client';

import { useProducts } from '@/hooks/useProducts';

const Pagination = () => {
  const { pagination } = useProducts();
  const numPages = Math.ceil(
    pagination.numProducts / pagination.productsPerPage
  );

  if (numPages === 1) return null;
  const pages = Array.from({ length: numPages }, (_, i: number) => i + 1);

  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 sm:px-6'>
      <div className='flex sm:flex-1 sm:items-center sm:justify-center'>
        <div
          className='isolate inline-flex -space-x-px rounded-md shadow-sm'
          aria-label='Pagination'
        >
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => pagination.onPageChange(page)}
              className={`${
                page === pagination.currentPage
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20'
              } relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
