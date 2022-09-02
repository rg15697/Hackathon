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

// io - wss
// socket - ws
wss.on("connection", (ws) => {
  ws.broadcast.emit("new user", history);
  ws.emit("history", history);
});

// CODE TO SHOW "OTHER USER IS TYPING"
// IT REEPLACES THE OTHER MESSAGES HISTORY
// ONLY FOR UNDERSTANDING PURPOSE
// wss.on("connection", (ws) => {
//   ws.on("typing", () => {
//     ws.broadcast.emit("typing");
//   });
// });

wss.on("connection", (ws) => {
  ws.on("new message", (m) => {
    history.push(m);
    wss.emit("new message", m);
  });
});

// wss.off("setup", () => {
//   console.log("USER disconnected");
//   wss.leave();
// });

// sendFile is express operation, not OS- file/fs operation
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

webServer.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server started on port ${process.env.PORT}`);
});

// app.listen(process.env.PORT, async () => {
//   await connection;
//   console.log(`Server listening at PORT ${process.env.PORT}`);
// });
