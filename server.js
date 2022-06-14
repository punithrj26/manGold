const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { connectDB } = require("./config/db");
const { NODE_ENV, PORT } = require("./config");
const baseRoute = require("./routes/baseRoute");
const path = require("path");
const app = express();

let startServer = () => {
  //? DataBase Connection
    connectDB();

  //?Middleware section
    if (NODE_ENV == "development") {
        app.use(morgan("dev"));
        app.use(cors());
    }
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')))

  //? Routes loading
    app.use("/hello", baseRoute);

  //? litsen port
    app.listen(PORT, _ => console.log(`Server running on port no : ${PORT}`));
};
startServer();
