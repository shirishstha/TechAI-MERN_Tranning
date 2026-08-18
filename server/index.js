const express = require("express");
const env = require('dotenv');
const { getMovies, createMovie, getAMovieWithId, updateMovieById, deleteMovieById } = require("./controller/movieController");
const movieRoutes = require("./routes/movieRoutes");
const connectDB = require("./utils/db");


env.config();
const app = express();
const Router = express.Router();

app.use(express.json());
connectDB();


app.get('/', (req, res) => {
    res.send('Hello world');
})

//movie routes
app.get('/movies', getMovies);
app.use('/movie', movieRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}`);
})