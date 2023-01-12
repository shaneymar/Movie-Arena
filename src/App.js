import './App.css';
import searchIcon from './search.png';
import {useEffect,useState} from 'react';
import MovieCard from './MovieCard';


const API_URL ="http://www.omdbapi.com?apikey=38e58c58";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

 
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Home Alone");
  }, []);

  return (
    <div className="app">
      <h1>MOVIE ARENA</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Enter Your Movie Title you're Looking for</h2>
        </div>
      )}
    </div>
  );
};
export default App;
