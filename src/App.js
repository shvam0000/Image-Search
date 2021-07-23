import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Search from './components/Search';
import Spinner from './components/UI/Spinner';
import Zoom from 'react-reveal/Zoom';

const App = (props) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className='container mx-auto'>
      <Search searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className='text-5xl text-center mx-auto mt-32'>No Images found</h1>
      )}

      {isLoading ? (
        <p>
          <Spinner />
        </p>
      ) : (
        <div className='md:grid md:grid-cols-2 gap-5'>
          {images.map((image) => (
            <Zoom>
              <Card key={image.id} image={image} />
            </Zoom>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
