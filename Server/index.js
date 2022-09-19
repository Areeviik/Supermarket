const express = require("express");
const cookieSession = require("cookie-session");
const apiRouter = require("./routes/api");
const cors = require("cors");
require("dotenv").config();

const a = require('./models')

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
// app.use(
//   cookieSession({
//     name: process.env.COOKIE_NAME,
//     secret: process.env.COOKIE_SECRET ,
//     httpOnly: true,
//     sameSite: "strict",
//     keys: ['asdf', 'fdsa']
//   })
// );

app.use("/", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

