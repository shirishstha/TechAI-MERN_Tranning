import { useEffect, useState } from "react"
import Footer from "../components/Footer.jsx"
import MovieCard from "../components/MovieCard.jsx"
import NavigationBar from "../components/NavigationBar.jsx"

function Home() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(500);
  const [search, setSearch] = useState('');

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmU4MzdiMDA5NDhkOGEyMjIzMTZhNGZlMzA1MmM4ZCIsIm5iZiI6MTc4MzM4OTc1OC45MjYsInN1YiI6IjZhNGM1ZTNlZDIzMmFlNDk0NGU3NDRiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xjulLFuF3a4NC6rYQ8vyC7HyMi2wwR0r1cqf8_fWiys"
    }
  };

  const getMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular",
      options);
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
  }

  const filterMovies = () => {
    console.log("hello");
    const result = movies.filter(movie => movie.vote_average >= 7);
    setMovies(result);
  }

  const findMovie = async () => {
    if (search.trim() === "") {
      return;
    }
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`, options);
    const data = await res.json();
    setMovies(data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);


  return (
    <>
      <div className="h-full ">

        <NavigationBar />
        <div className="relative max-h-screen">
          <div className="absolute inset-0 opacity-50 bg-black bg-radial"/>
          <img src="/lady.jpg"  alt="" className="max-h-screen w-full object-cover" />
          <div className="absolute top-2/5 left-10 w-md flex flex-col gap-2">
            <h1 className="text-5xl font-semibold">Find Your Best Movies</h1>
            <p className="">You can search numerous movies as per your choice and give the rating for that specific movie</p>
            <button className="bg-rose-700 p-2 rounded-lg text-sm w-fit">Dive in !</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {movies.length > 0 ? movies.map(movie => (
            <MovieCard
              name={movie.title}
              rating={movie.vote_average}
              description={movie.overview}
              link={movie.poster_path}
            />
          ))
            : search && <h1>Loading...</h1>}
        </div>
        <button onClick={() => getMovies()}>Get movies</button>
        <button onClick={(e) => filterMovies(e)}>Filter movies by rating</button>
        <div>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                findMovie();
              }
            }}
          />
          <button onClick={() => findMovie()}>Search</button>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home
