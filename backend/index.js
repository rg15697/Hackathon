const express = require("express");
const userRoutes = require("./routes/User.routes");
const connection = require("./config/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoutes);




webServer.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server started on port ${process.env.PORT}`);
});

// app.listen(process.env.PORT, async () => {
//   await connection;
//   console.log(`Server listening at PORT ${process.env.PORT}`);
// });
