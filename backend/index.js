const userRoutes = require("./routes/User.routes");

const express = require("express");
const app = express();

app.use(express.json());

app.use("/products", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at PORT ${process.env.PORT}`);
});
