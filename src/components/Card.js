import Download from './UI/Icons/Download';
import Like from './UI/Icons/Like';
const Card = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div>
      <img src={image.webformatURL} alt='Images fail to Load...' />
      <div>
        <p>
          <Like />
        </p>
        <p>{image.likes}</p>
      </div>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
      <button>
        <Download />
      </button>
    </div>
  );
};

export default Card;
