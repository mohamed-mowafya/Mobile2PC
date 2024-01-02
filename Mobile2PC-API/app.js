const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const configureSocket = require('./configs/socketConfig');
const fileRoute = require('./routes/fileRoute');
const cors = require('cors');
const helmet = require('helmet');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = configureSocket(server);

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: process.env.FRONT_URL
}
app.use(cors(corsOptions));
app.use(helmet());

app.use("/", fileRoute(io));
app.get("/health", (req, res) => {
  res.send("Up and running!");
});

io.on('connection', (socket) =>{
  console.log(socket.id)
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});