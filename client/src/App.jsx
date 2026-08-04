import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import MovieDetails from "./components/MovieDetails.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  )
}

export default App
