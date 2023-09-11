'use client';

import React from 'react';

const ErrorFallback = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-center'>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Sorry, something went wrong
        </h1>
      </div>
    </div>
  );
};

export default ErrorFallback;
