import React from 'react';

const Loading = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
      </div>
    </div>
  );
};

export default Loading;
