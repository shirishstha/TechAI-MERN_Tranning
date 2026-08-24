const express = require("express");
const env = require('dotenv');
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes")
const connectDB = require("./utils/db");


env.config();
const app = express();

app.use(express.json());
connectDB();


app.get('/', (req, res) => {
    res.send('Hello world');
})

//movie routes
// app.get('/movies', getMovies);
app.use('/movie', movieRoutes);
app.use('/user',userRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}`);
})