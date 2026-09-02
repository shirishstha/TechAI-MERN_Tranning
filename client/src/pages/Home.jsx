import { useEffect, useState } from "react"
import Footer from "../components/Footer.jsx"
import MovieCard from "../components/MovieCard.jsx"
import NavigationBar from "../components/NavigationBar.jsx"
import { Link } from "react-router-dom";
import api from "../../api/api.jsx";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');


  const getMovies = async () => {
    const res = await api.get('/movie/getAll');
    setMovies(res.data.result);
    console.log(res.data.result);
  }



  useEffect(() => {
    getMovies();
  }, []);


  return (
    <>
      <div className="h-full bg-gray-950 text-gray-300">

        <NavigationBar />
        <div className="relative max-h-screen">
          <div className="absolute inset-0 opacity-50 bg-black bg-radial" />
          <img src="/lady.jpg" alt="" className="max-h-screen w-full object-cover" />
          <div className="absolute top-2/5 left-10 w-md flex flex-col gap-2">
            <h1 className="text-5xl font-semibold">Find Your Best Movies</h1>
            <p className="">You can search numerous movies as per your choice and give the rating for that specific movie</p>
            <button className="bg-rose-700 p-2 rounded-lg text-sm w-fit">Dive in !</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {movies.length > 0 ? movies.map(movie => (
            <Link to={`/movie/${movie._id}`}>
              <MovieCard
                name={movie.title}
                description={movie.description}
                link={movie.posterUrl}
              />
            </Link>
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
