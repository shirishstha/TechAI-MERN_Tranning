const express = require("express");
const env = require("dotenv");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const connectDB = require("./utils/db");

env.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use("/movie", movieRoutes);
app.use("/user", userRoutes);
app.use("/review", reviewRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}`);
});