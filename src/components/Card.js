import { useState } from 'react';
import Download from './UI/Icons/Download';
import Like from './UI/Icons/Like';
const Card = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);
  const tags = image.tags.split(',');

  const likeHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div class='flex flex-col mt-3 items-center justify-center max-w-sm mx-auto'>
      <img
        className='w-auto h-auto bg-gray-300 bg-center bg-cover rounded-lg shadow-md'
        src={image.webformatURL}
        alt='Loading...'
      />

      <div className='w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800'>
        <h3 className='py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-2 mx-2 text-sm text-gray-700'>
              #{tag}
            </span>
          ))}
        </h3>

        <div className='flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700'>
          <button
            className={
              isLiked
                ? 'text-red-500 focus:outline-none'
                : 'text-black focus:outline-none'
            }
            onClick={likeHandler}>
            <Like />
          </button>
          <button className='px-2 py-1 text-xl font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
            <Download />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
