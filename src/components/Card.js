import { useState } from 'react';
import Download from './UI/Icons/Download';
import Like from './UI/Icons/Like';
import Redirect from './UI/Icons/Redirect';

const Card = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);
  const tags = image.tags.split(',');

  const likeHandler = () => {
    setIsLiked(!isLiked);
  };

  const redirectHandler = () => {
    let path = image.pageURL;
    window.location.href = path;
  };

  return (
    <div className='flex flex-col mt-3 items-center justify-center max-w-sm mx-auto font-montserrat'>
      <img
        className='w-auto h-auto rounded-lg shadow-2xl'
        src={image.webformatURL}
        alt='Loading...'
      />

      <div className='w-56 -mt-10 bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800'>
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
                ? 'text-red-500 focus:outline-none text-2xl'
                : 'text-black focus:outline-none text-2xl'
            }
            onClick={likeHandler}>
            <Like />
          </button>
          <button
            onClick={redirectHandler}
            className='px-2 py-1 text-xl font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
            <Redirect />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
