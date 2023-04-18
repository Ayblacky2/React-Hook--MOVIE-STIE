import './App.css';
import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";


function App() {


  // creating a default movie list 
  const [movies, setMovies] = useState([
    {
      title: `CAPTAIN MARVEL.`,
      description: `CAPTAIN MARVEL`,
      imgSrc : 'https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top',

      rating: 7.5
    },
    {
      title: `THE ARBITRATION.`,
      description: `THE ARBITRATION`,
      imgSrc: 'https://www.bellanaija.com/wp-content/uploads/2017/01/Arbitration2-723x1024.jpg',
      rating: 4.0
    },
    {
      title: `JOHN WICK.  `,
      description: `JOHN WICK`,
      imgSrc: 'https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg',
      rating: 5.5
    },
    {
      title: `HARD CANDY.`,
      description: `HARD CANDY`,
      imgSrc: 'https://talenthouse-res.cloudinary.com/image/upload/c_limit,w_750,h_1111/v1/articles/t43opdxqn1h29pk52vtr',
      rating: 5.0
    },
    {
      title: `THE HERO.`,
      description: `THE HERO`,
      imgSrc: 'https://www.mmppicture.co.in/wp-content/uploads/2020/07/The-Hero-Action-Movie-Poster-810x1080.jpg',
      rating: 3.0
    },

    {
      title: `STALKER.`,
      description: `STALKER`,
      imgSrc: 'https://www.bellanaija.com/wp-content/uploads/2017/01/Stalker-Nollywood-Movie.jpg',
      rating: 3.0
    },

    {
      title: `CITATION.`,
      description: `CITATION`,
      imgSrc: 'https://pbs.twimg.com/media/EhTO-eKXkAE9Htk.jpg',
      rating: 3.0
    },


    {
      title: `THE GRUDGE.`,
      description: `THE GRUDGE`,
      imgSrc: 'https://www.bellanaija.com/wp-content/uploads/2017/01/GRUDGE-OFFICIAL-724x1024.jpg',
      rating: 3.0
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);


  const handleFilterTitle = (input) => {setFilterTitle(input.target.value)};

  const handleFilterRate = (input) => {setFilterRate(parseFloat(input.target.value))};

  const handleAddMovie = () => {
    const NewMovie = {
      title: 'New Movie',
      description: 'A new movie has been added to this list',
      imgSrc: 'https://via.placeholder.com/150',
      rating: 1.0
    };
    setMovies([...movies, NewMovie])
  }

  return (
    <div className="App">
      <h1> MOVIE MART </h1> 

      <div className="Appp">      
      <button className="addButton"  onClick={handleAddMovie} >Add New Movie</button>
      </div>

      <Filter 
        filterByRate={handleFilterRate}
        filterByTitle={handleFilterTitle}
      />

      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate} />
    </div>

  );
}

export default App;