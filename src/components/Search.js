import { useState } from 'react';
const Search = ({ searchText }) => {
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            type='text'
            placeholder='Search...'
          />
          <button type='submit'>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
