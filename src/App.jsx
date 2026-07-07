import { useState } from "react"
import Footer from "./components/Footer.jsx"
import MovieCard from "./components/MovieCard.jsx"
import NavigationBar from "./components/NavigationBar.jsx"

function App() {
  // const movieArray = [
  //   {
  //     name: "Spiderman",
  //     rating: 5,
  //     description: "Spider-Man is the alter ego of Peter Parker, a brilliant but ordinary teenager who gains superhuman abilities after being bitten by a radioactive spider",
  //     link: "https://s1.dmcdn.net/v/OHBDi1enVwl6ZZmAZ/x1080"
  //   },
  //   {
  //     name: "Avengers",
  //     rating: 4.5,
  //     description: "The Avengers are a premier team of superheroes known as Earth's Mightiest Heroes, created by Stan Lee and Jack Kirby for Marvel Comics in 1963. ",
  //     link: "https://images2.alphacoders.com/131/thumb-1920-1315111.jpg"
  //   },
  //   {
  //     name: "Batman",
  //     rating: 3.5,
  //     description: "Batman is a brooding superhero and the secret identity of billionaire Bruce Wayne. Driven by the traumatic childhood murder of his parents, he protects Gotham City as a caped vigilante.",
  //     link: "https://images8.alphacoders.com/113/thumb-1920-1130536.jpg"
  //   },
  // ]
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

  return (
    <>
      <div className="h-full bg-olive-50">

        <NavigationBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {movies.map(movie => (
            <MovieCard
              name={movie.title}
              rating={movie.vote_count}
              description={movie.overview}
              link={movie.poster_path}
            />
          ))}
        </div>
        <button onClick={() =>getMovies()}>Get movies</button>
        {/* <h2 className="text-2xl">Count:{count}</h2>
        <button className="text-2xl p-2 shadow hover:cursor-pointer" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="text-2xl p-2 shadow hover:cursor-pointer" onClick={() => setCount(count - 1)}>Decrement</button>
        <div>
          Search
          <input
            type="text"
            className="border"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>
        {search} */}

        <Footer />
      </div>
    </>
  )
}

export default App
