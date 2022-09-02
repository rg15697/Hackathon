const express = require("express");
const { Server } = require("socket.io");
const userRoutes = require("./routes/User.routes");
const connection = require("./config/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoutes);

const webServer = require("http").createServer(app);

const wss = new Server(webServer);

const history = [];

wss.on("connection", (ws) => {
  ws.broadcast.emit("new user", history);
  ws.emit("history", history);
});

wss.on("connection", (ws) => {
  ws.on("new message", (m) => {
    history.push(m);

    wss.emit("new message", m);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

webServer.listen(8080, () => {
  console.log("Server started on port 8080");
});
