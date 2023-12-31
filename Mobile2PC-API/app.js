const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8080;

const filerouter = require("./routes/fileRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", filerouter);
app.get("/health", (req, res) => {
  res.send("Up and running!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});