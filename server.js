const express = require("express");
const dotenv = require("dotenv");
const { colors } = require("./helpers");
const connectDB = require("./config/db");

// load config variables
dotenv.config({ path: "./config/.env" });

const app = express();

// body parser
app.use(express.json());

// routers
const books = require("./routes/booksRoutes");
app.use("/api/v1/books", books);

// page not found
app.use((req, ))

// connect db
connectDB();

const { PORT } = process.env;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.green);
});

process.on("unhandledRejection", (err, _) => {
  if (error) {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
  }
});
