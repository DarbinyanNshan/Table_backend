require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');



const {
  HOST,
  PORT,
  DB
} = require('./constants');
const { ArmaturAdd, GetArmatur } = require('./controler/AutoControler');

console.log(DB);
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connetcted to DB'))
  .catch((error) => console.log(error))

app.use(express.json())
app.use(cors({
  origin: '*'
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/armatur/add',
  ArmaturAdd
)
app.get('/armatur',
  GetArmatur,
)
server.listen(PORT, () => {
  console.log(`App listening on port http://${HOST}:${PORT}`)
})