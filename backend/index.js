const express = require("express");
const userRoutes = require("./routes/User.routes");
const connect = require("./config/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoutes);

app.listen(process.env.PORT, async () => {
  await connect;
  console.log(`Server listening at PORT ${process.env.PORT}`);
});
