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
        className='w-full max-w-sm flex flex-col'>
        <div>
          <input
            className='border-b-4 border-gray-500 w-2/3 h-11 text-center bg-gray-100 focus:outline-none focus:border-gray-700'
            onChange={(e) => {
              setText(e.target.value);
            }}
            type='text'
            placeholder='Search...'
          />
          <button
            className='bg-blue-700 text-white text-xl px-5 py-2 rounded-lg ml-5 hover:bg-blue-600 focus:outline-none focus:bg-blue-700'
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
