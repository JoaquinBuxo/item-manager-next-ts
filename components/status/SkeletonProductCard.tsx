import React from 'react';

const Skeleton = () => {
  return (
    <div className='product-card-skeleton group relative animate-pulse'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 sm:h-50'></div>
      <div className='p-4 flex justify-between'>
        <div>
          <p className='mt-1 bg-gray-200 h-6 w-48'></p>
          <p className='mt-1 bg-gray-200 h-20 w-48'> </p>
          <p className='mt-1 bg-gray-200 h-6 w-48'></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
