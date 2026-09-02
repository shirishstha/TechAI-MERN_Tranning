import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import MovieDetails from "./components/MovieDetails.jsx"
import MovieForm from "./components/MovieForm.jsx"
import RegisterForm from "./components/RegisterForm.jsx"
import LoginForm from "./components/LoginForm.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/movie/create" element={<MovieForm/>}/>
      <Route path="/user/register" element={<RegisterForm/>}/>
      <Route path="/user/login" element={<LoginForm/>}/>

    </Routes>
  )
}

export default App
