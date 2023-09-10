import React from 'react';
import SkeletonProductCard from './SkeletonProductCard';

const Skeleton = () => {
  return (
    <div className='flex gap-x-6' data-testid='skeleton'>
      <SkeletonProductCard />
      <SkeletonProductCard />
      <SkeletonProductCard />
      <SkeletonProductCard />
      <SkeletonProductCard />
    </div>
  );
};

export default Skeleton;
