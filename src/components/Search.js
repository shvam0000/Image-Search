import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  };

  const downloadImage = (e) => {
    console.log('hey');
  };

  return (
    <div className='flex justify-center my-10 font-montserrat'>
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-sm flex flex-col justify-center'>
        <div className="flex justify-center">
          <input
            className='border-b-4 border-gray-500 w-2/3 text-center text-xl font-extrabold bg-gray-100 focus:outline-none focus:border-gray-700'
            onChange={(e) => {
              setText(e.target.value);
            }}
            type='text'
            placeholder='Search...'
          />
          <button
            className='bg-gray-700 border-2 border-gray-700 text-white md:text-xl font-extrabold px-5 py-2 rounded-lg ml-5 hover:bg-gray-600 focus:outline-none focus:bg-gray-700'
            type='submit'
            onClick={downloadImage}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
