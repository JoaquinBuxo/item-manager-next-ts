import React, { useCallback } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types/products';

const SortProducts = () => {
  const { sortField, setSortField } = useProducts();
  const productKeys = ['title', 'description', 'price', 'email'];

  const handleSelectChange = useCallback(
    (field: keyof Product) => {
      setSortField(field);
    },
    [setSortField]
  );

  return (
    <Listbox value={sortField} onChange={handleSelectChange}>
      {({ open }) => (
        <div className='w-64'>
          <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>
            Sort by
          </Listbox.Label>
          <div className='relative mt-2'>
            <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:text-sm sm:leading-6'>
              <span className='flex items-center justify-between'>
                <span className='truncate'>{sortField}</span>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={React.Fragment}
              enter='transition ease-out duration-100'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition ease-in duration-75'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-2 w-full py-2 bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {productKeys.map((key) => (
                  <Listbox.Option key={key} value={key}>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        } cursor-pointer select-none relative px-4 py-2`}
                      >
                        {key}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default SortProducts;
