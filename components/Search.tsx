'use client';

type SearchProps = {
  setSearchQuery: Function;
};

const SearchProduct: React.FC<SearchProps> = ({ setSearchQuery }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Search
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <input
          type='text'
          name='search'
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Search Product'
          onChange={handleSearch}
          autoComplete='off'
        />
      </div>
    </>
  );
};

export default SearchProduct;
