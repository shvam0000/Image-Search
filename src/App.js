import React, { useEffect, useState } from 'react';
import Spinner from './components/UI/Spinner';
import axios from 'axios';
import Search from './components/Search';
import Card from './components/Card';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div>
      <Search searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1>No Images Found</h1>}

      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
